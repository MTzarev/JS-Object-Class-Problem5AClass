function mathInSchool (array){
class Grades{
    constructor(name, grade){
        this.name = name;
        this.grade = grade;
    }
    dnevnik (){
        console.log(`${this.name} has grade ${this.grade} in mathematics!`);
    }
}
for (let i=0; i<array.length; i++){
    let info = array[i].split(` `)
   let name, grade;
   [name, grade] = [info[0], info[1]]
   
   let grades = new Grades (name, grade)
   grades.dnevnik()
}

    console.log();
}
mathInSchool([`Dani 5.5`, `Goshko 5.25`, `Slavi 2`, `Borko 5.5`])