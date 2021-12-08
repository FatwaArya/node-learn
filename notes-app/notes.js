const fs = require('fs');
const chalk = require('chalk')

const getNotes = () =>{
    return 'ERROR'
}
const addNote = (title,body)=>{
    const notes = loadNotes();
    // const duplicateNotes = notes.filter((note) =>note.title === title)
    const duplicateNote = notes.find((note)=> note.title === title)

  
    if (!duplicateNote){
        notes.push({
        title: title,
        body: body
    })
    saveNotes(notes);
    console.log('New note added')
    }else{
        console.log('Note title taken!')
    }

    
}
const removeNote = (title) =>{
    const notes = loadNotes();

    const duplicateNotes = notes.filter((note) =>note.title === title)

    if (duplicateNotes.length) {
        notes.shift({
        title: title
        })
    saveNotes(notes);
    console.log(chalk.bgGreen(title +' is removed'))
    }else{
        console.log(chalk.bgRed('Title doesnt exist'))
    }
}

const listNotes = ()=>{
    const notes = loadNotes();
    console.log(chalk.green('Your notes'))
    notes.forEach((note)=>{
        console.log(note.title)
    })
}
const readNotes=(title)=>{
    const notes = loadNotes();
    const findNotes = notes.find((note) => note.title === title)

    if (findNotes) {
        console.log(chalk.blue(findNotes.title))
        console.log(chalk.dim(findNotes.body))
    }else{
        console.log(chalk.red('ERROR: Notes Not Found'))
    }
    
}
    
const saveNotes =  (notes) =>{
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJsON)
}

const loadNotes = ()=>{
    try {
          const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);
    } catch (e) {
        return []
    }
  
}
module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNotes: readNotes
}