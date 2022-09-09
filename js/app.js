////////////add
const yargs = require("yargs");
const students = require('./students')
// console.log(students)
yargs.command({
    command:'add',
    describe:'Add students',
    builder:{
        id:{
            describe:"This is id in add command",
                type:'number',
                demandOption:true
        },
        name:{
            describe:"This is name add command",
                type:'string',
                demandOption:true
        },
        degree:{
            describe:"This is degree add command",
                type:'array',
                demandOption:true
        }
    },
    handler:()=>{
        students.addStudent(yargs.argv.id,yargs.argv.name,yargs.argv.degree)
    }
})
//////////////////////////////////delete student
yargs.command({
    command:'delete',
    describe:'delete students',
    builder:{
        id:{
            describe:"This is id in delete command",
                type:'number',
                demandOption:true
        }
    },
    handler:()=>{
        students.deleteStudent(yargs.argv.id)
    }
})
/////////////////////////////////////read student
yargs.command({
    command:'read',
    describe:'read students',
    builder:{
        id:{
            describe:"This is id in read command",
                type:'number',
                demandOption:true
        }
    },
    handler:()=>{
        students.readStudent(yargs.argv.id)
    }
})
//////////////////////////////////list
yargs.command({
    command:'list',
    describe:'list students',
    handler:()=>{
        students.listStudent()
    }
})
/////////////////////////////////update
yargs.command({
    command:'update',
    describe:'update students',
    builder:{
        id:{
            describe:"This is id in update command",
                type:'number',
                demandOption:true
        },
        name:{
            describe:"This is name update command",
                type:'string',
                demandOption:true
        }
    },
    handler:()=>{
        students.updateStudent(yargs.argv.id,yargs.argv.name)
    }
})
yargs.parse()