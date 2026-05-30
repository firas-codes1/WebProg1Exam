import { useState } from 'react'
import React from 'react'; 


function Comp({data}){
const restoflink="/full/600,/0/default.jpg";

  return (
    <div>
 <ul>
  {Object.entries(data).map(([key, value]) => (
    <li  key={key}>
      <h5 class="fs-6 fs-md-4 fs-lg-2" style={{textAlign: 'left'}}> Title: {JSON.stringify(value.title)} | ID: {JSON.stringify(value.id)}</h5>
      <h5 class="fs-6 fs-md-4 fs-lg-2" style={{textAlign: 'left'}}> Artist Title: {JSON.stringify(value.artist_title)} | Date display: {JSON.stringify(value.date_display)} </h5>
<br />
      <h4 className="text-danger fs-6 fs-md-4 fs-lg-2">
      <img class="img-fluid" src={"https://www.artic.edu/iiif/2/"+value.image_id+restoflink} alt="Image was not fetched, something is wrong"/>
      </h4>
       <br /><br />
       <a href={"https://www.artic.edu/artworks/"+value.id} target="_blank" rel="noopener noreferrer">
       <button style={{textAlign: 'center'}} variant="contained">See on website </button></a>
<br /><br />
   </li> 
  ))}
</ul>
</div>
  );
}

export default Comp;
