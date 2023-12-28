import React, { useEffect, useState } from 'react'
import './RawPost.css'
import axios from '../../Constants/axios'
import { Image_url,API_KEY } from '../../Constants/const'
import YouTube from 'react-youtube';



function RawPost(props) {

 
  
  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      autoplay: 1,
    },
  };

  const [movies,setMovies]= useState([])
  const [urlid,SetUrlId] =useState('')

  const HandleMovie=(id)=>{
    console.log(id)
    axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then(response=>{
      console.log(id)
      if (response.data.results !==0){
        SetUrlId(response.data.results[0])

      }
  })
  }
  useEffect(() => {
    axios.get(props.url).then((response) => {
      setMovies(response.data.results)
    });
  },[]); 
  return (
    <div>
        <div className='row'>
          <h2>{props.title}</h2>
          <div className='posters'>
            {movies.map((obj)=>
        
              <img onClick={()=>HandleMovie(obj.id)} className={props.isSmall ? 'smallposter' : 'poster'} src={`${Image_url+obj.backdrop_path}`} alt='p'/>
            )}
          </div>
        </div>
       {urlid && <YouTube opts={opts} videoId={urlid.key}/> }
    </div>
  )
}

export default RawPost
