import React, { useState, useEffect } from 'react';
import axios from "axios";
import Spinner from './ui/spinner';
import SingleQuote from './singleQuote';

const Quotes = () => {
  const [items, setItems] = useState([])
  const [isLoading, setLoading] = useState(true)
  const [text, setText] = useState('')
  

  useEffect(() => {
   try {
     const fetchData = async() =>{
      const { data } = await axios.get(`https://www.breakingbadapi.com/api/quotes`)
      setItems(data)
      setLoading(false)
     }
     fetchData()
   } catch (error) {
     console.log('Error accured:',error.message)
   }
  }, [])

  const onChange = (e) =>{
    setText(e.target.value)
    let newTerm = text.trim().toLowerCase()
    const newItems = items;
    const newItems1 = newItems.filter( item => item.quote.toLowerCase().includes(newTerm))
    setItems(newItems1)
  }

  return (
   <div>
     <div className="container">
<input type="search" className="form-control" placeholder="Search by quote word.." value={ text } onChange={ onChange }/>
     </div>
     <div className="container">
      {
        isLoading ? <Spinner /> : items.map( item => <SingleQuote key={item.quote_id} item={ item }  />)
      }
    </div>
   </div>
    
  );
};

export default Quotes;