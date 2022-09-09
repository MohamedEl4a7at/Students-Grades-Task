const addStudent = (id, name, degree) => {
    const students = loadStudents()
    /**
     * I have an idea but I can't implement it 😅
     * if we input string in id it returns null!!!!!!!
     */
    const duplicateStudents = students.find((ele) => {
        return ele.id === id
    })
    if (duplicateStudents) {
        console.log('Error duplicate id')
    } else {
        const total = totalFunction(degree)
        students.push({
            id,
            name,
            degree,
            total
        })
        saveStudents(students)
        console.log('Saved Successfully')  
    }
}
////////////////////////delete student
const deleteStudent =(id)=>{
    const students = loadStudents()
    const student = students.find((el)=>{
        return el.id === id
    })
    if(student){
        const index = students.indexOf(student)
        students.splice(index,1)
        saveStudents(students)
        console.log('Deleted')
    }else{
        console.log('Not found')
    }
}
///////////////////////////////read student
const readStudent = (id)=>{
    const students = loadStudents()
    const student = students.find((el)=>{
        return el.id === id
    })
    if(student){
        console.log(student)
    }else{
        console.log('Not found')
    }
}
////////////////////////////list
const listStudent = ()=>{
    const students = loadStudents()
    students.forEach(element => {
        console.log(element.name ,"grades are ",element.total)
    });
}
/////////////load data
const fs = require('fs')
const loadStudents = () => {
    try {
        const data = fs.readFileSync('students.json').toString()
        return JSON.parse(data)
    }
    catch (e) {
        return []
    }
}
///////////////////////////////////////////////////update
const updateStudent =(id,name)=>{
    const students = loadStudents()
    const student = students.find((el)=>{
        return el.id === id
    })
    if(student){
        const index = students.indexOf(student)
        student.name = name
        students.splice(index,1,student)
        saveStudents(students)
        console.log('updated')
    }else{
        console.log('Not found')
    }
}
/////////save function
const saveStudents = (data) => {
    const savedata = JSON.stringify(data)
    fs.writeFileSync('students.json', savedata)
}
////////total function
const totalFunction = (degree)=>{
    let sum = 0
    for (let i = 0; i < degree.length; i++) {
         sum += degree[i]
    }
    return sum
}
module.exports = {
    addStudent,
    deleteStudent,
    readStudent,
    listStudent,
    updateStudent
}