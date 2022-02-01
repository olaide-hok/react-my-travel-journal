import React from 'react';

export default function Location(list) {
  return (
      <>
      <div className='location-area'>
          <a href={list.imageUrl}>
          <img src={`../images/${list.title}.png`} alt={list.title}  className='location-img'/>
          </a>
          
          <div className='location-details'>
              <div className='location-links'>
                <img src="../images/location pin.png" alt="google map location" className='location-pin' />
                <span className='location-country'>{list.location.toUpperCase()}</span>
                <a href={list.googleMapsUrl}>View on Google Maps</a>
              </div>
              
              <h1 className='location-name'>{list.title}</h1>
              <span className='location-period'>{list.startDate} - {list.endDate}</span>
              <p className='location-description'>{list.description}
                </p>
          </div>
      </div>
      <hr className='horizontal-rule' />
      </>
  );
}
