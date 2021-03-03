import React,{useState} from 'react'
import CreateNote from './Components/CreateNote'
import Header from './Header'
import AllNotes from './Components/AllNotes'
import ImportantNote from './Components/ImportantNote'

const App = () => {
const [notes,setNotes] = useState([])

const createNote = (newNote)=>{
    setNotes([...notes,newNote])
}

const toggleNote =(id)=>{
    const latest_notes = notes.slice() 

    const index = latest_notes.findIndex(item=>item.id === id)

    const note = latest_notes[index]

    const latest_note = {
        ...note,
        isImportant:!note.isImportant
    }
    latest_notes[index]=latest_note
     setNotes(latest_notes)

}
    return (
        <div className="container-fluid p-0">
            <Header/>
            <CreateNote createNote={createNote}/>
            <hr/>
            <ImportantNote notes={notes} toggleNote={toggleNote}/>
            <hr/>
            <AllNotes notes={notes} toggleNote={toggleNote}/>
            <hr/>
        </div>
    )
}

export default App
