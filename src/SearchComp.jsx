import { useState } from 'react'
import React from 'react'; 
import Comp from "./Comp.jsx";

function SearchComp() {
  const [count, setCount] = useState("");
  const [count2, setCount2] = useState(0);
  const [sterm,setSterm] = useState("");
  const [data, setData] = useState([]);


  function handleChange(e) {
    setSterm(e.target.value);
  }
  function handleSubmit(e){
    e.preventDefault();
    setCount2(0);
   
    const fetchData = async () => {
     try {
    const response = await fetch('https://api.artic.edu/api/v1/artworks/search?q='+sterm+'&fields=title,image_id,date_display,artist_title,id');

    if (!response.ok){
      setCount2(1);
    
    throw new Error('HTTP error! Status: ${response.status} ');}

    const mydata = await response.json();
    setData(mydata.data);
    setCount("");
    
    //alert(mydata.data.length);
    //alert(count2);
    if(mydata.data.length==0 && count2==0){
      setCount("No results were found");
    }
} 
catch (error) {
    console.error('Fetch error:', error);
  setCount("An error occurred");}
  };
   

 fetchData();
  
  }


  return (

<div class="p-2 p-md-4 m-lg-5">
  <form onSubmit={handleSubmit}>
  <label> Enter artist name: 
  <input type="text" onChange={handleChange} />
  </label>
  <input type="submit" className="btn btn-success mb-3" />
  </form>
    <h3>{count}
  </h3>
  <Comp data={data} />
  </div>


  );
}

export default SearchComp;
