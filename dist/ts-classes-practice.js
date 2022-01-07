var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var InvoEmployee = /** @class */ (function () {
    function InvoEmployee(name, bGroup, design) {
        this.phone = "63456356412";
        this.empName = name;
        this.bloodGroup = bGroup;
        this.designation = design;
    }
    InvoEmployee.prototype.setEmpName = function (name) {
        this.empName = name;
    };
    InvoEmployee.prototype.getEmpName = function () {
        return this.empName;
    };
    InvoEmployee.prototype.employeeDetails = function () {
        return "".concat(this.empName, " ").concat(this.bloodGroup, " ").concat(this.designation);
    };
    InvoEmployee.empCode = "1234123";
    return InvoEmployee;
}());
var invoEmp = new InvoEmployee("abid", "test group", "test designation");
console.log(invoEmp.getEmpName());
var EmployeeSoftwareDev = /** @class */ (function (_super) {
    __extends(EmployeeSoftwareDev, _super);
    function EmployeeSoftwareDev(name, group, desig, depart) {
        var _this = _super.call(this, name, group, desig) || this;
        _this.department = depart;
        return _this;
    }
    EmployeeSoftwareDev.prototype.setDepartment = function (dept) {
        this.department = dept;
    };
    EmployeeSoftwareDev.prototype.getDepartment = function () {
        return this.department;
    };
    return EmployeeSoftwareDev;
}(InvoEmployee));
var empSoftDev = new EmployeeSoftwareDev("abid", "test group", "test desig", "test depart");
empSoftDev.setDepartment("software Development");
console.log(empSoftDev.getDepartment());
console.log(empSoftDev.getEmpName());
//Enums in Typescript
var WeekDays;
(function (WeekDays) {
    WeekDays[WeekDays["Sunday"] = 0] = "Sunday";
    WeekDays[WeekDays["Monday"] = 1] = "Monday";
    WeekDays[WeekDays["Tueseday"] = 2] = "Tueseday";
    WeekDays[WeekDays["Wednesday"] = 3] = "Wednesday";
    WeekDays[WeekDays["Thursday"] = 4] = "Thursday";
    WeekDays[WeekDays["Friday"] = 5] = "Friday";
    WeekDays[WeekDays["Saturday"] = 6] = "Saturday";
})(WeekDays || (WeekDays = {}));
console.log(WeekDays.Friday);
console.log(WeekDays["Friday"]);
console.log(WeekDays[5]);
//Enums are reverse typed.(you can get value from key and key from value)
var WeekDaysInit;
(function (WeekDaysInit) {
    WeekDaysInit[WeekDaysInit["Sunday"] = 1] = "Sunday";
    WeekDaysInit[WeekDaysInit["Monday"] = 2] = "Monday";
    WeekDaysInit[WeekDaysInit["Tueseday"] = 3] = "Tueseday";
    WeekDaysInit[WeekDaysInit["Wednesday"] = 4] = "Wednesday";
    WeekDaysInit[WeekDaysInit["Thursday"] = 5] = "Thursday";
    WeekDaysInit[WeekDaysInit["Friday"] = 6] = "Friday";
    WeekDaysInit[WeekDaysInit["Saturday"] = 7] = "Saturday";
})(WeekDaysInit || (WeekDaysInit = {}));
console.log(WeekDays.Sunday);
console.log(WeekDaysInit.Sunday);
//string enums
var WeekDaysStr;
(function (WeekDaysStr) {
    WeekDaysStr["Sunday"] = "SUNDAY";
    WeekDaysStr["Monday"] = "MONDAY";
    WeekDaysStr["Tueseday"] = "TUESEDAY";
    WeekDaysStr["Wednesday"] = "WEDNESDAY";
    WeekDaysStr["Thursday"] = "THURSDAY";
    WeekDaysStr["Friday"] = "FRIDAY";
    WeekDaysStr["Saturday"] = "SATURDAY";
})(WeekDaysStr || (WeekDaysStr = {}));
console.log(WeekDaysStr.Wednesday);
console.log(WeekDaysStr["Wednesday"]);
var WeekDaysHat;
(function (WeekDaysHat) {
    WeekDaysHat["OrgName"] = "Invozone";
    WeekDaysHat["OrgType"] = "Software Company";
    WeekDaysHat[WeekDaysHat["totalEmp"] = 500] = "totalEmp";
    WeekDaysHat[WeekDaysHat["workingDays"] = 5] = "workingDays";
    WeekDaysHat[WeekDaysHat["workingHours"] = 8] = "workingHours";
    WeekDaysHat["location"] = "Johar town lahore";
})(WeekDaysHat || (WeekDaysHat = {}));
console.log(WeekDaysHat.OrgName);
console.log(WeekDaysHat["OrgName"]);
console.log(WeekDaysHat.OrgType);
console.log(WeekDaysHat["OrgType"]);
console.log(WeekDaysHat.totalEmp);
console.log(WeekDaysHat["totalEmp"]);
console.log(WeekDaysHat[500]);
console.log(WeekDaysHat.workingDays);
console.log(WeekDaysHat["workingDays"]);
console.log(WeekDaysHat[5]);
console.log(WeekDaysHat.workingHours);
console.log(WeekDaysHat["workingHours"]);
console.log(WeekDaysHat[8]);
console.log(WeekDaysHat.location);
console.log(WeekDaysHat["location"]);
console.log("**************** Above Enums *****************");
//Generics
//simple function
function simpleInfo(firstName, lastName, phone) {
    return "".concat(firstName, " ").concat(lastName, " ").concat(phone);
}
var result = simpleInfo("Abid", "Ali", "5234523454");
console.log(result);
//simpleInfo("Abid", "Ali", 5234523454);
// simpleInfo("Abid", true, "5234523454");
// simpleInfo(44124, "Ali", 5234523454);
// simpleInfo("Abid", "Ali", "5234523454");
function oneTypeInfo(arg) {
    return arg;
}
var oneStr = oneTypeInfo("First Arguement");
console.log(oneStr);
var oneNum = oneTypeInfo(124234);
console.log(oneNum);
var oneBool = oneTypeInfo(true);
console.log(oneBool);
function twoTypeInfo(firstName, phone) {
    return "".concat(firstName, " ").concat(phone);
}
var twoStr = twoTypeInfo("First Arguement", 41234);
console.log(twoStr);
var twoNum = twoTypeInfo(124234, 52345);
console.log(twoNum);
var twoBool = twoTypeInfo("first name", "52345567");
console.log(twoBool);
function threeTypeInfo(firstName, phone, onProbation) {
    return "firstName: ".concat(firstName, " phone: ").concat(phone, " on Probation: ").concat(onProbation);
}
var threeStr = threeTypeInfo("First Arguement", "41234", "true");
console.log(threeStr);
var threeNum = threeTypeInfo(234, 41234, 1);
console.log(threeNum);
var threeBool = threeTypeInfo(true, false, true);
console.log(threeBool);
var threeSNB = threeTypeInfo("First Arguement", 41234, true);
console.log(threeSNB);
var threeSBN = threeTypeInfo("First Arguement", false, 23434);
console.log(threeSBN);
var threeBNS = threeTypeInfo(true, 41234, "last name");
console.log(threeBNS);
var student = {
    title: "Information Management System",
    titleFlag: 1
};
var studentS = {
    title: "Information Management System",
    titleFlag: "1"
};
var studentB = {
    title: "Information Management System",
    titleFlag: false
};
