import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import PendingButton from './Component/PendingButton';

function draw() {
  var canvas = document.getElementById('canvas');
  if (canvas.getContext) {
    var ctx = canvas.getContext('2d');
    var i = 0;
    setInterval(function(){
      console.log("클릭~");
      ctx.beginPath();
      var x = 25 + 50; // x coordinate
      var y = 25 + 50; // y coordinate
      var radius = 20; // Arc radius
      var startAngle = 0; // Starting point on circle
      var endAngle = Math.PI + (Math.PI * i) / 2; // End point on circle
      var anticlockwise = i % 2 == 0 ? false : true; // clockwise or anticlockwise
  
      ctx.arc(x, y, radius, startAngle, endAngle, anticlockwise);
  
      ctx.stroke();
      i++;
    }, 500)
  }
}

function App() {
  const [url, setURL] = useState('');

  const setImageUrl=(result)=>{
    setURL(result.message);
  }

  return (
    <div className="App">
      {/* <canvas id="canvas"/>
      <button onClick={draw}/> */}
      <img src={url} alt="puppy"/>
      <PendingButton fetchURL={'https://dog.ceo/api/breeds/image/random'}
                      setURL={setURL}/>
    </div>
  );
}

export default App;
