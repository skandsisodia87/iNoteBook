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
            'auth-token': "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjJiOWQ3YmYxMWUxZTZhYzBjODg5ZmNhIn0sImlhdCI6MTY1NjM0NjU1OX0.LXVFzw5shHrykbojbpANrFRrFFfNMA7RRHCIgk7sP44"
          },
        });
        const json= await response.json();
        setnotes(json)
      }

      // Add note
      const addnote=async (title,discription,tag)=>{
        const response = await fetch(`${host}/api/notes/addnote`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'auth-token': "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjJiOWQ3YmYxMWUxZTZhYzBjODg5ZmNhIn0sImlhdCI6MTY1NjM0NjU1OX0.LXVFzw5shHrykbojbpANrFRrFFfNMA7RRHCIgk7sP44"
          },
          body: JSON.stringify({title,discription,tag}) 
        });
        const note={
          "_id": "62bb557b570c04e094ad9d683",
          "user": "62b9d7bf11e1e6ac0c889fca",
          "title": title,
          "discription": discription,
          "date": "2022-06-28T19:24:43.992Z",
          "__v": 0
        }
        setnotes(notes.concat(note))
      }

      // Delete a note
      const deletenote=(id)=>{
        console.log("deleting a note", id );
        setnotes(notes.filter((note)=>{return note._id!==id}))
      }
      
      // Edit a note
      const editnote= async (id,title,discription,tag)=>{

          const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'auth-token': "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjJiOWQ3YmYxMWUxZTZhYzBjODg5ZmNhIn0sImlhdCI6MTY1NjM0NjU1OX0.LXVFzw5shHrykbojbpANrFRrFFfNMA7RRHCIgk7sP44"
            },
            body: JSON.stringify({title,discription,tag}) 
          });
          const json = response.json();
          // eslint-disable-next-line 
        for (let index = 0; index < notes.length; index++) {
          const element = notes[index];
          if(element._id=== id){
            element.title=title;
            element.discription=discription;
            element.tag=tag;
          }
        }
      }
    return (
        <NoteContext.Provider value={{notes,addnote,deletenote,editnote,getNote}}>
            {props.children}
        </NoteContext.Provider>
    )
}



export default NoteState;
