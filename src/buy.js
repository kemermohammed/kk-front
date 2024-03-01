import React, { useState, useEffect } from 'react';
import Comp from "./comp"
import './index'

const Buy = () =>{


    const [data, setData] = useState([]);

    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch('http://localhost:3003/item', {
            method: 'GET'
          });
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          const jsonData = await response.json();
          setData(jsonData.Items); // Set data to jsonData.Items
          console.log(jsonData.Items);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
  
      fetchData();
    }, []); 
  

    return(<>
    
    <h1>BUY</h1>
        <ul className='div1'>
          {data.map((item, index) => (
            <div key={index}><Comp name = {item.name} image = {item.image}/></div>
            // <li key={index}><Comp name={item.name} /></li> // If Comp component exists
          ))}
        </ul>
    </>)
}

export default Buy