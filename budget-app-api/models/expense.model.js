const mongoose = require("mongoose");
const Schema = mongoose.Schema;



const expenseSchema = new Schema({
    //userID: {type: String, required: true},
    //username: { type: String, required: true },//ref user model here
    item: {type: String, required: true},
    date: {type: Date, required: true},
    amount: {type: Number, required: true},
    
   
}, {
    timestamps: true,
});

const Expense = mongoose.model('Expense', expenseSchema);

module.exports = Expense;