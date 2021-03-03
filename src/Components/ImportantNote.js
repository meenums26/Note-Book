import React from 'react'
import Note from './Note'
const ImportantNote = ({notes,toggleNote}) => {
    return (
        <div className="importantNotes">
            <h5><b>My Favourites</b></h5>
            <div>
                {notes.filter(note=>note.isImportant === true).map(note=><Note note={note} toggleNote={toggleNote} key={note.id}/>)}
            </div>
            
        </div>
    )
}

export default ImportantNote
