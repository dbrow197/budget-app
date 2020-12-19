const mongoose = require("mongoose");
const Schema = mongoose.Schema;


//filter by object _ID:
const monthlyBudgetSchema = new Schema({
    //username: { type: String, required: true },//ref user model
    amount: {type: Number, required: true},
    date: {type: Date, required: true},
}, {
    timestamps: true,
});

const MonthlyBudget = mongoose.model('MonthlyBudget', monthlyBudgetSchema);

module.exports = MonthlyBudget;