import React,{useContext,useState} from 'react';
import NoteContext from '../context/notes/noteContext'

function Addnote() {
    const context = useContext(NoteContext)
    const { addnote } = context;
    const [note, setnote] = useState({title:"",discription:"",tag:"Default"});
    const handleClick=(e)=>{
        e.preventDefault();           // avoid to reload a page while submitting
        addnote(note.title,note.discription,note.tag);
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
            <input type="text" className="form-control" id="title" name='title' aria-describedby="emailHelp" onChange={onChange} />
          </div>
          <div className="mb-3">
            <label htmlFor="discription" className="form-label">Discription</label>
            <input type="text" className="form-control" id="discription" onChange={onChange} name='discription' />
          </div>
          {/* <div className="mb-3 form-check">
            <input type="checkbox" className="form-check-input" id="exampleCheck1" />
            <label className="form-check-label" htmlFor="exampleCheck1">Submit</label>
          </div> */}
          <button type="submit" className="btn btn-primary" onClick={handleClick}>Add Note</button>
        </form>
      </div>
  );
}

export default Addnote;
