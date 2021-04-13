class EmployeePayroll {
    id;
    salary;

    constructor(id, name, salary){
        this.id = id;
        this.name = name;
        this.salary = salary;
    }

    get name() {
        return this._name;
    }

    set name(name) {
        this._name = name;
    }

    toString() {
        return "id = " + this.id + ", name = " + this.name + ", salary = " + this.salary;
    }
}

let employeePayroll = new EmployeePayroll(1, "Surendra", 25000);
console.log(employeePayroll.toString());

employeePayroll.name = "Omkar";
console.log(employeePayroll.toString());