import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
//import Comp from "./Comp.jsx";

function App() {
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

const restoflink="/full/600,/0/default.jpg";




  return (
    <header>
  <div class="p-2 p-md-4 m-lg-5">
  <form onSubmit={handleSubmit}>
  <label> Enter artist name: 
  <input type="text" onChange={handleChange} />
  </label>
  <input type="submit" className="btn btn-success mb-3" />
  </form>
  </div>
  <h3>{count}</h3>
  <ul>
  {Object.entries(data).map(([key, value]) => (
    <li  key={key}>
      <h5 class="fs-6 fs-md-4 fs-lg-2" style={{textAlign: 'left'}}> Title: {JSON.stringify(value.title)} | ID: {JSON.stringify(value.id)}</h5>
      <h5 class="fs-6 fs-md-4 fs-lg-2" style={{textAlign: 'left'}}> Artist Title: {JSON.stringify(value.artist_title)} | Date display: {JSON.stringify(value.date_display)} </h5>
<br />
      <img class="img-fluid" src={"https://www.artic.edu/iiif/2/"+value.image_id+restoflink} />
       <br /><br />
       <a href={"https://www.artic.edu/artworks/"+value.id} target="_blank" rel="noopener noreferrer">
       <button style={{textAlign: 'center'}} variant="contained">See on website </button></a>
<br /><br />
   {"\n"}{"\n"}{"\n"} </li> 
  ))}
</ul>

  </header>

  );
}

export default App;
