class Employees {
    #salary;
    #isHired;
    static allEmployees = [];

    constructor(name, position, salary, isHired = true){
        this.name = name;
        this.position = position;
        this.#salary = salary;
        this.#isHired = isHired;
        Employees.allEmployees.push(this);
    }
    
    getSalary(){
        return this.#salary;
    }

    setSalary(amount){
        this.#salary = amount;
    }

    getStatus(){
        return this.#isHired;
    }

    setStatus(command){
        if (command === 'fire')
        {
            this.#isHired = false;
        }
        else if(command === 'hire')
        {
            this.#isHired = true;
        }
    }

   static getEmployees(){
        return Employees.allEmployees;
    }

   static getTotalPayroll(){
        let payroll = 0;
        for (let x = 0; x <= Employees.allEmployees.length - 1; x++)
    {
        payroll += Employees.allEmployees[x].#salary;
    }


        return payroll;
    }



    
}

module.exports = {
    Employees,
}