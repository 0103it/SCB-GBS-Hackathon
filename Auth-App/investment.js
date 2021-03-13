var router = require('express').Router();

router.post("/game", (req, res, next) => {
    age = req.body.age
    if( (age < 21) || (age > 65)){
        res.json("Invalid Age Group for Investment")
    }
    else {
    salaryPerYear = req.body.salary
    timePeriod = req.body.timePeriod
    console.log(req.body)
    fixedRate = 6;   // For general Case
    bestRate = 25    // Equity Market
    avgRate = 15     // Govt Bonds + Golds
    worstRate = 6     // Fixed Deposit

    initialValueBest = salaryPerYear / (100/bestRate)   // Best case will invest 25% of her salary
    initialValueAvg = salaryPerYear / (100/avgRate)    // Avg case will invest 25% of her salary
    initialValueWorst = salaryPerYear / (100/worstRate) // Worst case will invest 25% of her salary
    
    let p = initialValueBest;
    for( let i = 0 ; i < timePeriod ; i++){
        let interest = (p* fixedRate)/100
        p+=interest;
        p+=initialValueBest
        console.log(p)
    }
    finalValueBest = Math.floor(p);

    
    p = initialValueAvg;
    for( let i = 0 ; i < timePeriod ; i++){
        let interest = (p* fixedRate)/100
        p+=interest;
        p+=initialValueAvg
        console.log(p)
    }
    finalValueAvg = Math.floor(p);

    
    p = initialValueWorst;
    for( let i = 0 ; i < timePeriod ; i++){
        let interest = (p* fixedRate)/100
        p+=interest;
        p+=initialValueWorst
        console.log(p)
    }
    finalValueWorst = Math.floor(p);

    res.json({
        best: finalValueBest,
        avg: finalValueAvg,
        worst: finalValueWorst
    })
    }
});

router.get("/options", (req, res, next) => {
    res.json({
        "Stock Equity": 20,
        "Mutual Funds": 15,
        "Govt. Bonds": 10,
        "Fixed Deposit" : 6 
    })
})

module.exports = router