import express from 'express';
import errorController from '../controllers/errorController.js';

const router = express.Router();

router.use(errorController.display404);

export default router;
