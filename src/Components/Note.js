import React from 'react'

const Note = ({note:{note,date,id,isImportant},toggleNote}) => {
    return (
        <div className="note card mb-3 p-2">
            <div className="card-header">{date}</div>
            <div className="card-body">{note}</div>
            <button className="btn createBtn" id={id} onClick={()=>toggleNote(id)}>{isImportant?"Remove":"Add"}</button>
        </div>
    )
}

export default Note
