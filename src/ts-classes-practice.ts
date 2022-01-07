class InvoEmployee {
  public empName: string | null;
  protected bloodGroup: string | null;

  private designation: string | null;
  static readonly empCode: string = "1234123";
  readonly phone: string | null = "63456356412";

  constructor(name: string, bGroup: string, design: string) {
    this.empName = name;
    this.bloodGroup = bGroup;
    this.designation = design;
  }

  setEmpName(name) {
    this.empName = name;
  }
  getEmpName() {
    return this.empName;
  }

  employeeDetails() {
    return `${this.empName} ${this.bloodGroup} ${this.designation}`;
  }
}

const invoEmp = new InvoEmployee("abid", "test group", "test designation");

console.log(invoEmp.getEmpName());

class EmployeeSoftwareDev extends InvoEmployee {
  department: string | null;
  constructor(name, group, desig, depart) {
    super(name, group, desig);
    this.department = depart;
  }

  setDepartment(dept: string) {
    this.department = dept;
  }
  getDepartment() {
    return this.department;
  }
}

const empSoftDev = new EmployeeSoftwareDev(
  "abid",
  "test group",
  "test desig",
  "test depart"
);

empSoftDev.setDepartment("software Development");
console.log(empSoftDev.getDepartment());
console.log(empSoftDev.getEmpName());

//Enums in Typescript
enum WeekDays {
  Sunday,
  Monday,
  Tueseday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
}
console.log(WeekDays.Friday);
console.log(WeekDays["Friday"]);
console.log(WeekDays[5]);
//Enums are reverse typed.(you can get value from key and key from value)

enum WeekDaysInit {
  Sunday = 1,
  Monday,
  Tueseday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
}

console.log(WeekDays.Sunday);
console.log(WeekDaysInit.Sunday);

//string enums

enum WeekDaysStr {
  Sunday = "SUNDAY",
  Monday = "MONDAY",
  Tueseday = "TUESEDAY",
  Wednesday = "WEDNESDAY",
  Thursday = "THURSDAY",
  Friday = "FRIDAY",
  Saturday = "SATURDAY",
}

console.log(WeekDaysStr.Wednesday);
console.log(WeekDaysStr["Wednesday"]);

enum WeekDaysHat {
  OrgName = "Invozone",
  OrgType = "Software Company",
  totalEmp = 500,
  workingDays = 5,
  workingHours = 8,
  location = "Johar town lahore",
}

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

function simpleInfo(
  firstName: string,
  lastName: string,
  phone: string
): string {
  return `${firstName} ${lastName} ${phone}`;
}

const result = simpleInfo("Abid", "Ali", "5234523454");
console.log(result);
//simpleInfo("Abid", "Ali", 5234523454);
// simpleInfo("Abid", true, "5234523454");
// simpleInfo(44124, "Ali", 5234523454);
// simpleInfo("Abid", "Ali", "5234523454");

function oneTypeInfo<T>(arg: T): T {
  return arg;
}

let oneStr = oneTypeInfo<string>("First Arguement");
console.log(oneStr);

let oneNum = oneTypeInfo<number>(124234);
console.log(oneNum);

let oneBool = oneTypeInfo<boolean>(true);
console.log(oneBool);

function twoTypeInfo<S, N>(firstName: S, phone: N) {
  return `${firstName} ${phone}`;
}

let twoStr = twoTypeInfo<string, number>("First Arguement", 41234);
console.log(twoStr);

let twoNum = twoTypeInfo<number, number>(124234, 52345);
console.log(twoNum);

let twoBool = twoTypeInfo<string, string>("first name", "52345567");
console.log(twoBool);

function threeTypeInfo<S, N, B>(firstName: S, phone: N, onProbation: B) {
  return `firstName: ${firstName} phone: ${phone} on Probation: ${onProbation}`;
}

let threeStr = threeTypeInfo<string, string, string>(
  "First Arguement",
  "41234",
  "true"
);
console.log(threeStr);

let threeNum = threeTypeInfo<number, number, number>(234, 41234, 1);
console.log(threeNum);

let threeBool = threeTypeInfo<boolean, boolean, boolean>(true, false, true);
console.log(threeBool);

let threeSNB = threeTypeInfo<string, number, boolean>(
  "First Arguement",
  41234,
  true
);
console.log(threeSNB);

let threeSBN = threeTypeInfo<string, boolean, number>(
  "First Arguement",
  false,
  23434
);
console.log(threeSBN);

let threeBNS = threeTypeInfo<boolean, number, string>(true, 41234, "last name");
console.log(threeBNS);

interface IDetail<T, U> {
  title: T;
  titleFlag: U;
}

let student: IDetail<string, number> = {
  title: "Information Management System",
  titleFlag: 1,
};

let studentS: IDetail<string, string> = {
  title: "Information Management System",
  titleFlag: "1",
};

let studentB: IDetail<string, boolean> = {
  title: "Information Management System",
  titleFlag: false,
};
