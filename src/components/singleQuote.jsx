import React from 'react';

const SingleQuote = ({ item }) => {
  return (
    <div className="card">
      <div className="card-body">
        <h4 className="card-title">{item.quote} <small>- by {item.author}</small></h4>
      </div>
    </div>
  );
};

export default SingleQuote;
