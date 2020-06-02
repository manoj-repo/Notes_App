const Notes = require('./notes');
//const validator = require('validator');
const chalk = require('chalk');
const yargs = require('yargs');


const command = process.argv[2];
yargs.version('1.1.0');

//creating add
yargs.command({
    command : 'add',
    description : 'Add a new Note',
   // builder is an object we use to support the given options
    builder : {
        title : {
            describe : 'Note Title :', // option description
            demandOption : true,      // title is required
            type : 'string'           // The title shold be a string
        },

        body : {
            describe : 'Add a Note',
            demandOption : true,
            type : 'string'
        }

    },
    handler(argv) {
            Notes.addNote(argv.title,argv.body)
    }
})

//create remove command

yargs.command({
    command : 'remove',
    description : 'removing the node',
    builder : {
        title : {
            describe : 'Remove a Note',
            demandOption : true,
            type : 'string'
        }
    },
    handler(argv) {
        Notes.removeNotes(argv.title);
    }
})

// listing note 

yargs.command({
    command : 'list',
    description : 'Listing the node',
    handler() {
        
        Notes.listNotes();
    }
})

// reading list

yargs.command({
    command : 'read',
    description : 'Reading the node',
    builder : {
        title : {
            describe : 'Note Title :',
            demandOption : true,
            type : 'string'
        }

    },
    handler(argv) {
        
        Notes.readNotes(argv.title);
    }
})

//console.log(process.argv);
yargs.parse();  // or console.log(yargs.argv);

















// const add = require('./util');
// const sum = add(20,40);
// console.log(sum);

// const msg = getNotes();
// console.log(msg);
// // console.log(validator.isEmail('manoj@gmail.com'));
// // console.log(validator.isURL('http://gmail.com'));
// console.log(chalk.bold.green('Success is a result of hardwork!!'))