import React, { useContext, useEffect, useRef, useState } from 'react'
import NoteContext from '../context/notes/noteContext'
import Noteitem from './Noteitem';

function Notes() {
    const context = useContext(NoteContext)
    const { notes, getNote,editnote} = context;
    const ref = useRef(null);
    const refClose = useRef(null);
    useEffect(() => {
        getNote();
        // eslint-disable-next-line
    }, []);
    const [note, setnote] = useState({id:"", etitle: "", ediscription: ""});
    const updatenote = (currentnote) => {
        ref.current.click();
        setnote({id:currentnote._id, etitle: currentnote.title, ediscription: currentnote.discription })
    }
    const handleClick = (e) => {
        editnote(note.id,note.etitle,note.ediscription)
        refClose.current.click([]);
        e.preventDefault();           // avoid to reload a page while submitting
    }

    const onChange = (e) => {
        setnote({ ...note, [e.target.name]: e.target.value })    //spread operator
    }
    return (
        <> <div>
            <button type="button" ref={ref} className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Launch demo modal
            </button>
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Edit Note</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="mb-3">
                                    <label htmlFor="title" className="form-label">Title</label>
                                    <input type="text" className="form-control" id="etitle" name='etitle' value={note.etitle} aria-describedby="emailHelp" onChange={onChange}  minLength={5} required/>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="discription" className="form-label">Discription</label>
                                    <input type="text" className="form-control" id="ediscription" onChange={onChange} value={note.ediscription} name='ediscription' minLength={5} required />
                                </div>
                                {/* <div className="mb-3">
                                    <label htmlFor="tag" className="form-label">Tag</label>
                                    <input type="text" className="form-control" id="etag" onChange={onChange} name='etag' value={note.etag} />
                                </div> */}
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" ref={refClose} className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" disabled={note.etitle.length<5 || note.ediscription.length<5} onClick={handleClick} className="btn btn-primary">Update note</button>
                        </div>
                    </div>  
                </div>
            </div>
        </div>
            <div className="row my-3">
                <h2>Your Note</h2>
                <div className="container mx-2">
                {notes.length===0 && 'Nathing to display'}
                </div>
                {notes.map((note) => {
                    return <Noteitem key={note._id} note={note} updatenote={updatenote} />
                })}
            </div>
        </>
    )
}

export default Notes
