const multer = require("multer");

// l'emplacement de fichier
const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, "uploads");
  },
  filename(req, file, cb) {
    const uniqueSuffix = `${Date.now()}-${Math.round(Math.random() * 1e9)}`;
    cb(null, `${uniqueSuffix}-${file.originalname}`);
  },
});
// choisir l'extention de fichier

const fileFilter = (req, file, cb) => {
  if (
    file.mimetype.includes("jpeg") ||
    file.mimetype.includes("png") ||
    file.mimetype.includes("jpg")
  ) {
    cb(null, true);
  } else {
    cb(null, false);
  }
};
// choisir la taille maximal de fichier
const maxSize = 2 * 1000 * 1000;

const upload = multer({
  storage,
  fileFilter,
  maxSize,
});

module.exports = upload.single("thumbnail");
