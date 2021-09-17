import mongoose  from "mongoose";

const betSchema = mongoose.Schema({
    title:{
        type: String,
        required: true
    }, 
    betAmount: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: new Date()
    }
});

const Bet = mongoose.model('Bet', betSchema);
export default Bet;