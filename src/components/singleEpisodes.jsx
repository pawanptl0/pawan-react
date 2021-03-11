import React from 'react';

const SingleEpisodes = ({ item }) => {
  return (
    <div className="card">
      <div className="card-body">
        <h4 className="card-title">{item.title}</h4>
        <p className="card-text">
          <strong>Season:</strong> {item.season}, <strong>Episode:</strong> {item.episode}, <strong>Air Date:</strong> {item.air_date}<br />
          <strong>Characters:</strong> {item.characters.join(',')}
        </p>
      </div>
    </div>
  );
};

export default SingleEpisodes;
