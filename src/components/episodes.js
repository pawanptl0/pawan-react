import React, { useState, useEffect } from 'react';
import axios from "axios";
import Spinner from './ui/spinner';
import SingleEpisodes from './singleEpisodes';

const Episodes = () => {
  const [items, setItems] = useState([])
  const [isLoading, setLoading] = useState(true)
  

  useEffect(() => {
   try {
     const fetchData = async() =>{
      const { data } = await axios.get(`https://www.breakingbadapi.com/api/episodes`)
      setItems(data)
      setLoading(false)
     }
     fetchData()
   } catch (error) {
     console.log('Error accured:',error.message)
   }
  }, [])

  return (
    <div className="container">
      {
        isLoading ? <Spinner /> : items.map( item => <SingleEpisodes key={item.episode_id} item={ item }  />)
      }
    </div>
  );
};

export default Episodes;