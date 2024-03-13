const { Employees } = require("./Employees.js")


class SalesPerson extends Employees{

    #totalSales;
    constructor(name, position, salary, isHired = true, clients, totalSales = 0 )
    {
        super(name, position, salary, isHired);
        this.clients = clients || [];
        this.#totalSales = totalSales;
    }

    getSalesNumber(){
        return this.#totalSales;
    }

    makeSale(amount){
        this.#totalSales += amount;
    }



    
}

module.exports = {
    SalesPerson,
}