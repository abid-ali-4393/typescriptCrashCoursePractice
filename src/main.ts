// variables
const a = 25;
console.log(a);
// a = 40;
let userName: string = "test name";

//userName = true;

//explicitly define types of variables and function return type to make it more safe
const fullName = (firstName: string, lastName: string): string => {
  return ` ${firstName} ${lastName}`;
};

console.log(fullName("Abid", "Ali"));

//Interfaces
const employee = {
  name: "test employee",
  age: 30,
};

const employee2 = {
  name: "test employee 2 ",
};

//define properties that object should have
const propEmployee: { name: string; age: number } = {
  name: "test property employee",
  age: 15,
};

const propEmployee2: { name: string; age: number } = {
  name: "test property employee 2",
  age: 45,
};

//write interface to make property definition reusable(define once use with interface name)
interface Employee {
  empName: string;
  age?: number;
}

const interEmployee: Employee = {
  empName: "interface employee",
  age: 45,
};

//make properties optional with ?
const interOptEmployee: Employee = {
  empName: "interface Optional Employee",
};

//define methods inside interface (IEmployee or EmployeeInterface)
interface IEmployee {
  designation: string;
  techStack: string;
  experience: number;
  employeeProfile(): string;
}

const employeeProfile: IEmployee = {
  designation: "software engineer",
  techStack: "MEAN",
  experience: 2,
  employeeProfile() {
    return `${this.designation} working on ${this.techStack} having experience of ${this.experience} years`;
  },
};

//Union & Type aliases

let devName: string | null = null;

let phoneNum: string | number;

//use interface type with type union

interface IUser {
  name: string | null;
  address: string | null;
}

const testDev: IUser | null = null;

//avoid using too many type unions as it becomes less safer and more error proned like JS.
const multiDev: string | number | boolean | null | undefined = null;

/*Type Aliases (provider alternative name to data type to bring more clarity and understang. 
    alias name should always have first letter uppercake like interfaces).
*/

type Id = string;
type EmpType = string;
type PopEmp = EmpType | boolean | null;
const aliasEmpId: Id = "bg-234";
let aliasEmpType: EmpType = "full time";
let empPopularity: PopEmp = null;

//void any never unknown types

const log = (name: string): void => {
  console.log(name);
};
log("Test user function with void return type");

let prog: any;
prog = true;
prog = "test";
prog = 234;
prog = [3, 4, 5, 6];

let unVariable: unknown;

unVariable = true;
unVariable = "werwe";
unVariable = 124234;
unVariable = ["sdf", "fhfd", "cvbc"];
unVariable = prog;

let primVar = "thing";

/** Type Assertion is a process of converting one data type to another data type
 * use as operator to convert one type to other.
 */

let anyVar = "345";
let unVar = "asdf";

let numVar = anyVar as unknown as number;

let strVar = unVar as string;
