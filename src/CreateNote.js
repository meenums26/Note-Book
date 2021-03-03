import React,{useState} from 'react'

const CreateNote = () => {
    const [note,setNote] = useState('')
    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(note)
    }
    return (
        <div className="createNote">
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <textarea col="3" rows="5" className="form-control" placeholder="Write your notes.." value={note} onChange={e=>setNote(e.target.value)} required></textarea>
                    <button className="btn createBtn" type="submit">Create Note</button>
                </div>
            </form> 
        </div>
    )
}

export default CreateNote
 