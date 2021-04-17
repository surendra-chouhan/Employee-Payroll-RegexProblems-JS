class EmployeePayroll {
    id;
    salary;
    gender;
    startdate;

    constructor(...params){
        this.id = params[0];
        this.name = params[1];
        this.salary = params[2];
        this.gender = params[3];
        this.startdate = params[4];
    }

    get name() {
        return this._name;
    }

    set name(name) {
        let nameRegex = RegExp('[A-Z]{1}[a-z]{3,}');
        if (nameRegex.test(name)) {
            this._name = name;
        }
        else {
            throw "Name is Incorrect";
        }
    }

    toString() {
        return "id = " + this.id + ", name = " + this.name + ", salary = " + this.salary +
                ", gender = " + this.gender + ", startdate = " + this.startdate;
    }
}

let employeePayroll = new EmployeePayroll(1, "Surendra", 25000);
console.log(employeePayroll.toString());

try {
    employeePayroll.name = "omkar";
    console.log(employeePayroll.toString());
}
catch(e){
    console.error(e);
}

let newemployeePayroll = new EmployeePayroll(2, "Rohit", 20000, "M", new Date("03-02-2019"));
console.log(newemployeePayroll.toString());