import React, { useState, useEffect } from 'react';
import axios from "axios";
import Spinner from './ui/spinner';
import Search from './ui/search';
import SingleChar from './singleChar';

const Main = () => {
  const [items, setItems] = useState([])
  const [isLoading, setLoading] = useState(true)
  const [term, setTerm] = useState('')

  useEffect(() => {
   try {
     const fetchData = async() =>{
      const { data } = await axios.get(`https://www.breakingbadapi.com/api/characters?name=${term}`)
      setItems(data)
      setLoading(false)
     }
     fetchData()
   } catch (error) {
     console.log('Error accured:',error.message)
   }
  }, [term])

  return (
    <div>
      <div>
        <Search handleChange={ (val) => setTerm(val) }/>
      </div>
      <div className="container">
      {
        isLoading ? <Spinner /> : <div className="card-columns">
          {
            items.map( item => <SingleChar key={item.char_id} item={ item }  />)
          }
        </div>
      }
    </div>

    </div>
  );
};

export default Main;