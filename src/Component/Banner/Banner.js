import React, { useEffect, useState } from 'react'
import './Banner.css'
import axios from '../../Constants/axios.js';
import { API_KEY } from '../../Constants/const';
import { Image_url } from '../../Constants/const';






function Banner() {
  const [movies,setMovies] = useState()
  
  useEffect(() => {
    axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((response) => {
      setMovies(response.data.results[0])
    });
  }, []); 





  return (
    <div
      style={{ backgroundImage: `url(${movies ? Image_url + movies.backdrop_path : ""})` }}>
    <div className='banner'>
        <div className='content'>
            <div className='title'>{movies ? movies.title :''}</div>
            <div className='Banner_Button'>
            <button className='button'>Play</button>
            <button className='button'>My list</button>
            </div>
            <h1 className='description'>{movies ? movies.overview: ''}</h1>
        </div>
        <div className='fade_bottom'></div>
    </div>
    </div>
  )
}

export default Banner;