import React from 'react'
import Addnote from './Addnote'
import Notes from './Notes'

function Home(props) {
  return (
    <div className='container my-3'>
      <Addnote showAlert={props.showAlert}/>
      <Notes showAlert={props.showAlert}/>
    </div>
  )
}

export default Home
