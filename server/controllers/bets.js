import Bet from '../models/Bet.js';

export const getBets = async (req, res) => {
    try {
        const bets = await Bet.find();
        res.status(200).json(bets);
    } catch (error) {
        
    }
}

export const createBet = async (req, res) => {
    const bet = new Bet(req.body);
    try {
        await bet.save();
        res.status(201).json(bet);
    } catch (error) {
        
    }
}

export const updateBet = async (req, res) => {
    try {
        const bet = await Bet.find(req.params.id);
        res.status(200).json(bet);
    } catch (error) {
        
    }
}

export const destroyBet = async (req, res) => {
    try {
        const bet = await Bet.find(req.params.id)
        res.status(200).json(bet);
    } catch (error) {

    }
}

