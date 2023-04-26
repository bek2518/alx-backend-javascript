var student1 = {
    firstName: 'Bereket',
    lastName: 'Bayou',
    age: 28,
    location: 'Addis_Ababa'
};
var student2 = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30,
    location: 'Ontario'
};
var studentsList = [student1, student2];
var table = document.createElement("table");
studentsList.forEach(function (student) {
    var row = document.createElement("tr");
    var firstName = document.createElement("td");
    var location = document.createElement("td");
    firstName.textContent = student.firstName;
    location.textContent = student.location;
    row.appendChild(firstName);
    row.appendChild(location);
    table.appendChild(row);
});
document.body.appendChild(table);
