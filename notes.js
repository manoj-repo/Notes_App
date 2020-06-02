const fs = require('fs');
const chalk = require('chalk');

const addNote = function(title,body)
{
    const notes = loadNotes();
    const duplicateRecord = notes.find((note) => note.title == title);

    debugger

    if(!duplicateRecord)
    {
        notes.push({
            title : title,
            body : body
        })
        saveNotes(notes);
        console.log(chalk.inverse.green('New Note added '));
    }
    else
    {
        console.log(chalk.inverse.red('Note Title taken'));
    }
    
}

const removeNotes = (title) =>{
    const notes = loadNotes();
    const fetchrecord = notes.filter((note) =>note.title !== title); 

    if(notes.length > fetchrecord.length)
    {
        saveNotes(fetchrecord);
        console.log(chalk.inverse.green('Note Removed'));
    }
    else
    {
        console.log(chalk.inverse.red('Note not found'));
    }
   
}

const listNotes = () =>{

    const notes = loadNotes();

    console.log(chalk.bold.blue('Your Notes'));

    notes.forEach((note)=> {
        console.log(note.title);
    })
    // the code to display title and body
    // const fecthTitle = notes.filter((note)=> note.title!=0);
    // console.log(fecthTitle);


}

const readNotes = (title)=> {

    const notes = loadNotes();
    const fecthTitle = notes.find((note)=> note.title == title);
    if(fecthTitle)
    {
        console.log(chalk.bold.green('Title : '+fecthTitle.title));
        console.log(chalk.blue('Body : '+fecthTitle.body));

    }
    else
    {
        console.log(chalk.red.bold('No note found'));
    }

}
const saveNotes =(notes) =>{
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync('notes.json',dataJSON);
}

const loadNotes = ()=>{
    try
    {
        const databuffer = fs.readFileSync('notes.json');
        const dataJSON = databuffer.toString();
        return JSON.parse(dataJSON);
    }
    catch(e)
    {
        return[];    
    }

}

module.exports = {
    addNote : addNote,
    removeNotes : removeNotes,
    listNotes : listNotes,
    readNotes : readNotes
}