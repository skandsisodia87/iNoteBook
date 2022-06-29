import React from 'react'
import Addnote from './Addnote'
import Notes from './Notes'

function Home() {
  return (
    <div className='container my-3'>
      <Addnote/>
      <Notes/>
    </div>
  )
}

export default Home
