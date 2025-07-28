const multer = require("multer"); 
const fs = require("fs");
const path = require("path");
const createHttpError = require("http-errors");
const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        fs.mkdirSync(path.join(process.cwd(), "public", "upload"), {recursive: true});
        cb(null, "public/upload");
    }, 
    filename: function(req, file, cb) {
        console.log("Receiving file:", file.originalname, file.mimetype);
        const whiteListFormat = ["image/png", "image/jpg", "image/jpeg", "image/webp", "image/svg"];
        if(whiteListFormat.includes(file.mimetype)) {
            const format = path.extname(file.originalname);
            const filename = new Date().getTime().toString() + format; 
            cb(null, filename);
        } else {
            cb(new createHttpError.BadRequest("format of pictuers are wrong!"))
        }
    }
})
const upload = multer({
    storage, 
    limits: {
        fileSize: 3 * 1000 * 1000
    }
}); 

module.exports = {
    upload
}