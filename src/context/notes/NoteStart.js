import NoteContext from "./noteContext";
import { useState } from "react";

const NoteState=(props)=>{
    const host = "http://localhost:5000"
    const notesinitial=[]
      const [notes, setnotes] = useState(notesinitial);
      
      // Get a note
      const getNote=async ()=>{
        const response = await fetch(`${host}/api/notes/fetchallnotes`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'auth-token': localStorage.getItem('token')
          },
        });
        const json= await response.json();
        setnotes(json)
      }

      // Add note
      const addnote=async (title,discription)=>{
        const response = await fetch(`${host}/api/notes/addnote`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'auth-token': localStorage.getItem('token')
          },
          body: JSON.stringify({title,discription}) 
        });
        const note = await response.json()
        setnotes(notes.concat(note));
      }

      // Delete a note
      const deletenote = async (id)=>{
        const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          'auth-token': localStorage.getItem('token')
        },
      });
      const json = response.json();
      console.log(json);
        setnotes(notes.filter((note)=>{return note._id!==id}))
      }

      // Edit a note
      const editnote= async (id,title,discription)=>{

          const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
              'auth-token': localStorage.getItem('token')
            },
            body: JSON.stringify({title,discription}) 
          });
          const json = await response.json();
          console.log(json);
          // eslint-disable-next-line 
          let newnote=JSON.parse(JSON.stringify(notes));
        for (let index = 0; index < newnote.length; index++) {
          const element = newnote[index];
          if(element._id=== id){
            newnote[index].title=title;
            newnote[index].discription=discription;
            break;
          }
        }
        setnotes(newnote);
      }
    return (
        <NoteContext.Provider value={{notes,addnote,deletenote,editnote,getNote}}>
            {props.children}
        </NoteContext.Provider>
    )
}



export default NoteState;
