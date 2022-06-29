import NoteContext from "./noteContext";
import { useState } from "react";

const NoteState=(props)=>{

    const notesinitial=[
        {
          "_id": "62baa81e12e8d68172cf957c",
          "user": "62b9d7bf11e1e6ac0c889fca",
          "title": "New title version 1.2",
          "discription": "Please make some changes in database ",
          "date": "2022-06-28T07:05:02.805Z",
          "__v": 0
        },
        {
          "_id": "62bb557b570c0e094ad9d683",
          "user": "62b9d7bf11e1e6ac0c889fca",
          "title": "My title version 1.1",
          "discription": "Please go ahead to access the note",
          "date": "2022-06-28T19:24:43.992Z",
          "__v": 0
        },
        {
          "_id": "62baa81e12e8d68172cf957c",
          "user": "62b9d7bf11e1e6ac0c889fca",
          "title": "New title version 1.2",
          "discription": "Please make some changes in database ",
          "date": "2022-06-28T07:05:02.805Z",
          "__v": 0
        },
        {
          "_id": "62bb557b570c0e094ad9d683",
          "user": "62b9d7bf11e1e6ac0c889fca",
          "title": "My title version 1.1",
          "discription": "Please go ahead to access the note",
          "date": "2022-06-28T19:24:43.992Z",
          "__v": 0
        },
        {
          "_id": "62baa81e12e8d68172cf957c",
          "user": "62b9d7bf11e1e6ac0c889fca",
          "title": "New title version 1.2",
          "discription": "Please make some changes in database ",
          "date": "2022-06-28T07:05:02.805Z",
          "__v": 0
        },
        {
          "_id": "62bb557b570c0e094ad9d683",
          "user": "62b9d7bf11e1e6ac0c889fca",
          "title": "My title version 1.1",
          "discription": "Please go ahead to access the note",
          "date": "2022-06-28T19:24:43.992Z",
          "__v": 0
        }
      ]
      const [notes, setnotes] = useState(notesinitial);
    return (
        <NoteContext.Provider value={{notes,setnotes}}>
            {props.children}
        </NoteContext.Provider>
    )
}



export default NoteState;
