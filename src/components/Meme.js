import React from 'react'
import group from '../images/Group.png'

export default function Meme(){
  return(
    <div>
      <main>
        <form className='form'>
          <input type='text' className='form-input' placeholder='top-text' />
          <input type='text' className='form-input' placeholder='bottom-text' />
          <button className='form-btn'>Get a new meme image</button>
        </form>
      </main>
      <div className='meme'>
        <img src={group} className='group' alt=''/>
        <h2 className='text-up'>One does not simply</h2>
        <h2 className='text-bottom'>Walk into Mordor</h2>
      </div>
    </div>
  )
}