import multer from 'multer';

const Storage = multer.diskStorage({
  destination: 'uploads',
  filename: (req, file, cb) => {
    cb(
      null,
      req.body.username +
        '-' +
        Math.ceil(Math.random() * 5000 + 1) +
        '-' +
        file.originalname
    );
  },
});

const upload = multer({
  storage: Storage,
}).single('image');

export { upload };
