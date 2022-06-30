import React,{useContext,useEffect} from 'react'
import NoteContext from '../context/notes/noteContext'
import Noteitem from './Noteitem';

function Notes() {
    const context = useContext(NoteContext)
    const { notes , getNote} = context;
    useEffect(() => {
        getNote();
    }, []);
    return (
        <div className="row my-3">
            <h2>You Note</h2>
            {notes.map((note) => {
                return <Noteitem key={note._id} note={note}/>
            })}
        </div>
    )
}

export default Notes
