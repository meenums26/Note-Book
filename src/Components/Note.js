import React from 'react'

const Note = ({note:{note,date,id,isImportant},toggleNote}) => {
    return (
        <div className="note card mb-3 p-2">
            <div className="card-header">{date}</div>
            <div className="card-body">{note}</div>
            <button className="btn" style={{'font-size':'30px','color':'#FF6200','border':'1px solid #FF6200','border-radius':'50px'}}id={id} onClick={()=>toggleNote(id)}>{isImportant?"♥":"♡"}</button>
        </div>
    )
}

export default Note
