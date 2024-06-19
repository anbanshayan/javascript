const person ={
    sname:"Anbashayan",
    age:24,
    university:"University of Colombo School of Computing",
    home:"Jaffna"
}
console.log(person.sname,person.home)

//we can create object using 'new' keyword

const school = new Object()

school.name = "University of Colombo School of Computing"
school.year = 2002;
school.location = "35, Reid Avenue Colombo 7"
school.director = 'Dr.Ajantha Atukorale'

console.log("Our Campus is "+school.name)