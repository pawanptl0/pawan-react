import React from 'react';

const SingleDeath = ({ item }) => {
  return (
    <div className="card">
      <div className="card-body">
        <h4 className="card-text">
          <strong>Episode:</strong>&nbsp;{item.episode}<br />
          <strong>Death:</strong>&nbsp;{item.death},&nbsp;
          <strong>Total Death:</strong>&nbsp;{item.number_of_deaths},&nbsp;
          <strong>Cause:</strong>&nbsp;{item.cause}<br />
          <strong>Last Words:</strong>&nbsp;{item.last_words},&nbsp;
          <strong>Responsible:</strong>&nbsp;{item.responsible}
        </h4>
      </div>
    </div>
  );
};

export default SingleDeath;

