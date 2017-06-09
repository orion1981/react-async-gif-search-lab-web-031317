import React, {Component} from 'react'


const Gif = ({ url }) => {
  return (
    <li className='gif'>
    <img src=`${url}`/>
    </li>
  )
}

const GifList = ({ gifs }) => {
  return (
    <div className='gif-list'>
      <ul>
       {gifs.map(Gif)}
       </ul>
    </div>
  )
}




export default GifList
