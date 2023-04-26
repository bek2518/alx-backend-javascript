export interface Teacher {
  readonly firstName: string,
  readonly lastName: string,
  fullTimeEmployee: boolean,
  yearsOfExperience?: number,
  location: string,
  [contract: string]: any,
}

export interface Directors extends Teacher {
  numberOfReports: number;
}

export function printTeacher(firstName: string, lastName: string): string {
  return `${firstName[0]}. ${lastName}`
}

export interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

export interface studentConstructorInterface {
  (firstName: string, lastName: string): studentClassInterface;
}

export interface studentClassInterface {
  workOnHomeWork(): string;
  displayName(): string;
}

export class StudentClass {
  firstName: string;
  lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomeWork() {
    return 'Currently working';
  }

  displayName(){
    return this.firstName;
  }
}
