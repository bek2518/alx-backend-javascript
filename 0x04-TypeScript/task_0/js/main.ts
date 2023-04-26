interface Student {
	firstName: string;
	lastName: string;
	age: number;
	location: string;
  }
  
  const student1: Student = {
	firstName: 'Bereket',
	lastName: 'Bayou',
	age: 28,
	location: 'Addis_Ababa',
  }
  
  const student2: Student = {
	firstName: 'John',
	lastName: 'Doe',
	age: 30,
	location: 'Ontario',
  }
  
  const studentsList = [student1, student2];
  
  const table = document.createElement("table");
  
  studentsList.forEach((student: Student) => {
	const row = document.createElement("tr");
	const firstName = document.createElement("td");
	const location = document.createElement("td");
  
	firstName.textContent = student.firstName;
	location.textContent = student.location;
  
	row.appendChild(firstName);
	row.appendChild(location);
	table.appendChild(row);
  });
  
  document.body.appendChild(table);
  