import NoteContext from "./noteContext";
import { useState } from "react";

const NoteState=(props)=>{

    const notesinitial=[
        {
          "_id": "62baa81e12e8d681712cf957c",
          "user": "62b9d7bf11e1e6ac0c889fca",
          "title": "New title version 1.2",
          "discription": "Please make some changes in database ",
          "date": "2022-06-28T07:05:02.805Z",
          "__v": 0
        },
        {
          "_id": "62bb557b570c0e0924ad9d683",
          "user": "62b9d7bf11e1e6ac0c889fca",
          "title": "My title version 1.1",
          "discription": "Please go ahead to access the note",
          "date": "2022-06-28T19:24:43.992Z",
          "__v": 0
        },
        {
          "_id": "62baa81e12e8d681721cf957c",
          "user": "62b9d7bf11e1e6ac0c889fca",
          "title": "New title version 1.2",
          "discription": "Please make some changes in database ",
          "date": "2022-06-28T07:05:02.805Z",
          "__v": 0
        },
        {
          "_id": "62bb557b570c0e0914ad9d683",
          "user": "62b9d7bf11e1e6ac0c889fca",
          "title": "My title version 1.1",
          "discription": "Please go ahead to access the note",
          "date": "2022-06-28T19:24:43.992Z",
          "__v": 0
        },
        {
          "_id": "62baa81e12e8d638172cf957c",
          "user": "62b9d7bf11e1e6ac0c889fca",
          "title": "New title version 1.2",
          "discription": "Please make some changes in database ",
          "date": "2022-06-28T07:05:02.805Z",
          "__v": 0
        },
        {
          "_id": "62bb557b570c04e094ad9d683",
          "user": "62b9d7bf11e1e6ac0c889fca",
          "title": "My title version 1.1",
          "discription": "Please go ahead to access the note",
          "date": "2022-06-28T19:24:43.992Z",
          "__v": 0
        }
      ]
      const [notes, setnotes] = useState(notesinitial);
      // Add a note
      const addnote=(title,discription,tag)=>{
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
      const deletenote=()=>{

      }

      // Edit a note
      const editnote=()=>{

      }


    return (
        <NoteContext.Provider value={{notes,addnote,deletenote,editnote}}>
            {props.children}
        </NoteContext.Provider>
    )
}



export default NoteState;
