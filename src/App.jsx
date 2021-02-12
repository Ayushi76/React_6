import React from 'react';

function App(){
    
let currDate = new  Date(2021,10,2,16);
currDate = currDate.getHours();
let greeting ="";
const cssStyle = {};

if (currDate > 1 && currDate <12) {
  greeting = "Good Morning";
  cssStyle.color = "blue";
}
else if (currDate >=12 &&  currDate < 20)
{
  greeting = "Good Afternoon"
  cssStyle.color = "orange";
}
else if (currDate >= 20 && currDate <=24) {
  greeting = "Good Night";
  cssStyle.color= "black";
}

return(
    <>
    <h1>Hello Sir,<span style={cssStyle}>{greeting} </span> </h1>
    </>
);
};
export default App;