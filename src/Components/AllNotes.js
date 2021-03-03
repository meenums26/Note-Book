import React from 'react'
import Note from './Note'
const AllNotes = ({ notes,toggleNote }) => {
    return (
        
                    <div className="allNotes my-3">
                         <h5><b>All Notes</b></h5>
                        <div className="container">
                       
                        {
                            notes.map((note)=><Note key={note.id} note={note} toggleNote={toggleNote}/>)
                        }
            </div>
        </div>
    )
}

export default AllNotes
