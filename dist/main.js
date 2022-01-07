// variables
var a = 25;
console.log(a);
// a = 40;
var userName = "test name";
//userName = true;
//explicitly define types of variables and function return type to make it more safe
var fullName = function (firstName, lastName) {
    return " ".concat(firstName, " ").concat(lastName);
};
console.log(fullName("Abid", "Ali"));
//Interfaces
var employee = {
    name: "test employee",
    age: 30
};
var employee2 = {
    name: "test employee 2 "
};
//define properties that object should have
var propEmployee = {
    name: "test property employee",
    age: 15
};
var propEmployee2 = {
    name: "test property employee 2",
    age: 45
};
var interEmployee = {
    empName: "interface employee",
    age: 45
};
//make properties optional with ?
var interOptEmployee = {
    empName: "interface Optional Employee"
};
var employeeProfile = {
    designation: "software engineer",
    techStack: "MEAN",
    experience: 2,
    employeeProfile: function () {
        return "".concat(this.designation, " working on ").concat(this.techStack, " having experience of ").concat(this.experience, " years");
    }
};
//Union & Type aliases
var devName = null;
var phoneNum;
var testDev = null;
//avoid using too many type unions as it becomes less safer and more error proned like JS.
var multiDev = null;
var aliasEmpId = "bg-234";
var aliasEmpType = "full time";
var empPopularity = null;
//void any never unknown types
var log = function (name) {
    console.log(name);
};
log("Test user function with void return type");
var prog;
prog = true;
prog = "test";
prog = 234;
prog = [3, 4, 5, 6];
var unVariable;
unVariable = true;
unVariable = "werwe";
unVariable = 124234;
unVariable = ["sdf", "fhfd", "cvbc"];
unVariable = prog;
var primVar = "thing";
/** Type Assertion is a process of converting one data type to another data type
 * use as operator to convert one type to other.
 */
var anyVar = "345";
var unVar = "asdf";
var numVar = anyVar;
var strVar = unVar;
