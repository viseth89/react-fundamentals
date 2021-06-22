const instructors = [
    {name: 'Quincy', specialty: 'Quantam Mechanics'},
    {name: 'Kenn', specialty: 'Norse Mythology'},
    {name: 'Carolyn', specialty: 'Kung Fu'},
    {name: 'Paul', specialty: 'Entomology'},
];

let instructor_names = [];

instructors.forEach(instructor => {
    instructor_names.push(instructor.name)
})

console.log(instructor_names);

const instructorNames = instructors.map(instructor=>instructor.name);
console.log(instructorNames)

const instructorNamesTwo = instructors.map(i=>i.name);
console.log(instructorNamesTwo)

const instructorInfo = instructors.map(i => i.name, i.specialty);

console.log(instructorInfo)