const router = require('express').Router();
let MonthlyBudget = require('../models/monthlyBudget.model');

router.route('/').get((req, res) => {
    MonthlyBudget.find()
        .then(monthlyBudget => res.json(monthlyBudget))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req,res)=> {
    //const username = req.body.username;
    const amount = Number(req.body.amount);
    const date = Date.parse(req.body.date)
    

    const newMonthlyBudget = new MonthlyBudget({
        //username,
        amount,
        date,
    });

    newMonthlyBudget.save()
    .then(() => res.json('Budget added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
    MonthlyBudget.findById(req.params.id)
        .then(monthlyBudget => res.json(monthlyBudget))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
    MonthlyBudget.findByIdAndDelete(req.params.id)
        .then(() => res.json('Budget deleted.'))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
    MonthlyBudget.findById(req.params.id)
    .then(monthlyBudget => {
       // monthlyBudget.username = req.body.username;
        monthlyBudget.amount = Number(req.body.amount);
        monthlyBudget.date = Date.parse(req.body.date);
        
        monthlyBudget.save()
            .then(() => res.json('Budget updated!'))
            .catch(err => res.status(400).json('Error: ' + err));
    });
})


module.exports = router;