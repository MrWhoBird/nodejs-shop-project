import express from 'express';
import utilController from '../controllers/utilController.js';

const router = express.Router();

router.use(utilController.display404);

export default router;
