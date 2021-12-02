// const add = require('./utils.js')

// const sum = add(4, -2)
// console.log(sum);
const chalk = require('chalk')
const getNotes = require('./notes.js');
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
    handler: function (argv) {
        console.log('Note Title: ' + argv.title)
        console.log('Body: ' + argv.body)

    }
})

//create remove command
yargs.command({
    command : 'remove',
    describe : 'remove note',
    handler: function(){
        console.log('Removing the notes...')
    }
})

yargs.command({
    command: 'list',
    describe : 'list a note',
    handler: function(){
        console.log('listing your notes')
    }
})

yargs.command({
    command: 'read',
    describe : 'open notes',
    handler : function(){
        console.log('opening your notes')
    }
})
//add remove read list
yargs.parse();

// console.log(yargs.argv)

