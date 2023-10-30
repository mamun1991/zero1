// const { CloudinaryStorage } = require("multer-storage-cloudinary");
const multer = require("multer");
const path = require("path");
// const cloudinary = require("../config/cloudinary");

// const storage = new CloudinaryStorage({
//     cloudinary: cloudinary,
//     params: {
//         folder: "InputCSV",
//     },
// });

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "backend/public/");
    },
    filename: (req, file, cb) => {
        const fileExt = path.extname(file.originalname);
        const fileName = file.originalname.replace(fileExt, "").toLowerCase().split(" ").join("-") + "-" + Date.now();
        cb(null, fileName + fileExt);
    },
    fileFilter: (req, file, cb) => {
        if (file.fieldname === "attatchment") {
            if (file.mimetype === "image/png" || file.mimetype === "image/jpg" || file.mimetype === "image/jpeg" || file.mimetype === "image/gif") {
                cb(null, true);
            } else {
                cb(new Error("Only image format allowed!"));
            }
        } else {
            cb(new Error("There was an unknown error!"));
        }
    },
});

const storeAttatchment = multer({
    storage: storage,
    limits: {
        fileSize: 1024 * 1024 * 10, // 10 MB
    },
}).single("attatchment");

module.exports = storeAttatchment;
