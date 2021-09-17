import express from 'express';
import { getBets, createBet, destroyBet, updateBet } from '../controllers/bets.js';
const router = express.Router();


router.get('/', getBets);
router.post('/', createBet);
router.patch('/', updateBet);
router.delete('/', destroyBet);

export default router;