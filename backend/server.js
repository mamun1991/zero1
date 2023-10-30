const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const { notFound, errorHandler } = require("./middlewares/defaultErrorMiddlewares");
const dbConnection = require("./db/dbConnection");
const adminInit = require("./utils/adminInit");

const app = express();

//external middlewares
app.use(cors());

dotenv.config();

//Internal middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("backend/public"));

//server init
dbConnection();
adminInit();

//routes
const userHandler = require("./routes/user.routes");
const positionHandler = require("./routes/position.routes");
const contactHandler = require("./routes/contact.routes");
const applicationHandler = require("./routes/application.routes");

app.use("/api/v1/auth", userHandler);
app.use("/api/v1/positions", positionHandler);
app.use("/api/v1/contacts", contactHandler);
app.use("/api/v1/application", applicationHandler);

// --------------------------deployment------------------------------

if (process.env.NODE_ENV === "production") {
    app.get("/", (req, res) => {
        res.send("APP is running..");
    });
} else {
    app.get("/", (req, res) => {
        res.send("APP is running..");
    });
}
// --------------------------deployment------------------------------

//bad request
app.get("*", (req, res) => {
    res.status(404).json({
        message: "Page not found",
    });
});

//error handling
app.use(notFound);
app.use(errorHandler);

// listing to the server
app.listen(process.env.PORT || 5000, () => {
    console.log(`Server is running on port ${process.env.PORT || 5000}`);
});
