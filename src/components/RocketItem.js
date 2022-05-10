import React from 'react';

function RocketItem(props) {
  const {
    id,
    name,
    type,
    flickr_images,
    description,
  } = props;
  return (
    <div className="rocket">
      <img src={flickr_images[0]} alt={name} />
      <div className='content'>
        <h4>{name}</h4>
        <p>{description}</p>
        <button type='button'>Reserve Rocket</button>
      </div>
    </div>
  );
}

export default RocketItem;
