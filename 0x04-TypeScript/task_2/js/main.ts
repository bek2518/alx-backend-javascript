interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;  
}

interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string; 
}

export class Director implements DirectorInterface {
  workFromHome(): string {
    return 'Working from home';
  }

  getCoffeeBreak(): string {
    return 'Getting a coffee break';
  }

  workDirectorTasks(): string {
    return 'Getting to director tasks';
  }
}

export class Teacher implements TeacherInterface {
  workFromHome(): string {
    return 'Cannot work from home';
  }

  getCoffeeBreak(): string {
    return 'Cannot have a break';
  }

  workTeacherTasks(): string {
    return 'Getting to work';
  }
}

export function createEmployee(salary: (number | string)): (DirectorInterface | TeacherInterface) {
  if (typeof(salary) === 'number' && salary < 500) {
    return new  Teacher();
  } else {
    return new Director();
  }
}

export function isDirector(employee: DirectorInterface | TeacherInterface) {
  return (employee as DirectorInterface);
}

export function executeWork(employee: Director | Teacher) {
  if (isDirector(employee)) {
    return (employee.workDirectorTasks())
  } else {
    return (employee.workTeacherTasks())
  }
}
