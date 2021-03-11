import React from 'react';

const SingleChar = ({ item }) => {
  return (
    <div className="card">
      <img className="card-img-top" src={ item.img} alt={ item.name } />
      <div className="card-body">
        <h4 className="card-title">{ item.name }</h4>
        <p className="card-text">
          <strong>Actor Name:</strong> {item.portrayed}<br />
          <strong>Nickname:</strong> {item.nickname}<br />
          <strong>Birthday:</strong> {item.birthday}<br />
          <strong>Status:</strong> {item.status}
        </p>
      </div>
    </div>
  );
};

export default SingleChar;