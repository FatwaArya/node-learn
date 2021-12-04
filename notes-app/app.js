// const add = require('./utils.js')

// const sum = add(4, -2)
// console.log(sum);
const chalk = require('chalk')
const notes = require('./notes.js');
const yargs = require('yargs');


//npm init is going to intialize npm


//customize yargs
yargs.version('1.1.0')
//create add command
yargs.command({
    command : 'add',
    describe : 'Add a new note',
    builder: {
        title: {
            describe:'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type : 'string'
        }
    },
    handler(argv) {
       notes.addNote(argv.title , argv.body)

    }
})

//create remove command
yargs.command({
    command : 'remove',
    describe : 'remove note',
    builder: {
        title:{
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        notes.removeNote(argv.title)
    }
})

yargs.command({
    command: 'list',
    describe : 'list a note',
    handler(){
        notes.listNotes();
    }
})

yargs.command({
    command: 'read',
    describe : 'open notes',
    builder:{
        title:{
            describe: 'Note title to open',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        notes.readNotes(argv.title);
    }
})
//add remove read list
yargs.parse();

// console.log(yargs.argv)

