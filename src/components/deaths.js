import React, { useState, useEffect } from 'react';
import axios from "axios";
import Spinner from './ui/spinner';
import SingleDeath from './singleDeath';

const Deaths = () => {
  const [items, setItems] = useState([])
  const [isLoading, setLoading] = useState(true)
  

  useEffect(() => {
   try {
     const fetchData = async() =>{
      const { data } = await axios.get(`https://www.breakingbadapi.com/api/deaths`)
      console.log('Death',data)
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
        isLoading ? <Spinner /> : items.map( item => <SingleDeath key={item.death_id} item={ item }  />)
      }
    </div>
    
  );
};

export default Deaths;