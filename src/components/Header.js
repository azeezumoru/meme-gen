import React from 'react'
import face from '../images/face.png'

export default function Header(){
  return(
    <div className='container'>
      <div className='header'>
        <img src={face} className='pic1' alt='' />
        <h3 className='meme'>Meme Generator</h3>
        <p className='project'>React Course - Project 3</p>
      </div>
    </div>
  )
}