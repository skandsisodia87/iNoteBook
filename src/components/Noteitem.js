import React,{useContext} from 'react';
import NoteContext from '../context/notes/noteContext';

function Noteitem(props) {
    const context=useContext(NoteContext);
    const {deletenote} = context;
    const {note, updatenote}=props
    return (
        <div className='col-md-3'>
            <div className="card my-3" >
                    <div className="card-body">
                        <h5 className="card-title">{note.title}</h5>
                        <p className="card-text">{note.discription}</p>
                        <i className="fa-solid fa-clipboard mx-2" onClick={()=>{updatenote(note)}}></i>
                        <i className="fa-solid fa-trash-can mx-2" onClick={()=>{deletenote(note._id); props.showAlert("Deleted Successfully","success")}} ></i>
                    </div>
            </div>
        </div>
    );
}

export default Noteitem;
