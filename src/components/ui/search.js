import React, { useState } from 'react';

const Search = ({ handleChange }) => {
  const [state, setstate] = useState('')
  const onChange = (e) =>{
    setstate(e.target.value)
    handleChange(e.target.value)
  }
  return (
    <div className="container">
      <form>
        <div className="form-group">
          <input className="form-control mb-3" value={ state } onChange={ onChange } placeholder="Search..."/>
        </div>
    </form>
    </div>
  );
};

export default Search;