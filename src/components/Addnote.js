import React,{useContext,useState} from 'react';
import NoteContext from '../context/notes/noteContext'

function Addnote() {
    const context = useContext(NoteContext)
    const { addnote } = context;
    const [note, setnote] = useState({title:"",discription:""});

    const handleClick=(e)=>{
        e.preventDefault();           // avoid to reload a page while submitting
        addnote(note.title,note.discription);
        setnote({title:"",discription:""})
    }

    const onChange=(e)=>{
        setnote({...note,[e.target.name]:e.target.value})    //spread operator
    }

  return (
    <div className="container my-3">
        <h2>Add a Note</h2>
        <form>
          <div className="mb-3">
            <label htmlFor="title" className="form-label">Title</label>
            <input type="text" className="form-control" id="title" name='title' value={note.title} aria-describedby="emailHelp" onChange={onChange} minLength={5} required/>
          </div>
          <div className="mb-3">
            <label htmlFor="discription" className="form-label">Discription</label>
            <input type="text" className="form-control" id="discription" value={note.discription} onChange={onChange} name='discription' minLength={5} required/>
          </div>
          {/* <div className="mb-3">
            <label htmlFor="tag" className="form-label">Tag</label>
            <input type="text" className="form-control" id="tag" onChange={onChange} name='tag' />
          </div> */}

          <button  disabled={note.title.length<5 || note.discription.length<5} type="submit" className="btn btn-primary" onClick={handleClick}>Add Note</button>
        </form>
      </div>
  );
}

export default Addnote;
