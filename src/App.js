// import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
// import Buy from './buy';
// import { useState } from 'react';
// function App() {


//   const [formData, setFormData] = useState({
//     name: '',
//   picture: ''
//   });
//   const [name,setName] = useState('')
//   const [pic,setPic] = useState('')
//   const handleChange = (e) => {
//     const value = e.target.value;
//     setName(value);
//   };
//   const handlePic = (e) => {
//     const value = e.target.value;
//     setPic(value);
//   };
//   // const handleChange = (e) => {

//   //   // const { name, value } = e.target;
//   //   // setFormData(prevState => ({
//   //   //   ...prevState,
//   //   //   [name]: value
//   //   // }));
//   // };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await fetch('http://localhost:3003/item', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(formData)
//       });
//       if (response.ok) {
//         console.log('Data submitted successfully!');
//         // Clear form after submission if needed
//         setFormData({ name: '', picture: '' });
//       } else {
//         console.error('Failed to submit data');
//       }
//     } catch (error) {
//       console.error('Error submitting data:', error);
//     }
//   };

//   return (

   
//       <div>
//         <h1>KK PRINTING MACHINES</h1>
//         <p>Admin Dashboard</p>
//         <h2>INVENTORY</h2>
//         <div>CREATE NEW</div>
//         <div>
       
//           {/* <Link to="/buy">BUY</Link>
//           <Route path="/buy">
//             <Buy />
//           </Route> */}
//         </div>
//         <div>SELL</div>
//         <div><h1>CREATE NEW</h1>
//         <form onSubmit={handleSubmit}>
//           <div>
//         productName:
//         <input onChange= {handleChange} value = {name} type='text'/>
//         </div>
//         <div>
//         image:
//         <input  onChange= {handlePic} value = {pic} type='text'/>
//         <div>
//         <button>DONE</button>
//         </div>
//         </div>
//         </form>
//         </div>
//       </div>
    
//   );
// }

// export default App;
import Rct from './wow';
import { useState,useEffect } from 'react';
import Comp from "./comp"
import './index'

function App() {
  const [name, setName] = useState('');
  const [pic, setPic] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'name') {
      setName(value);
    } else if (name === 'picture') {
      setPic(value);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3003/item', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, image: pic })
      });
      if (response.ok) {
        alert("NEW PRODUCT CRREATED")
        console.log('Data submitted successfully!');
        // Clear form after submission if needed
        setName('');
        setPic('');
      } else {
        console.error('Failed to submit data');
      }
    } catch (error) {
      console.error('Error submitting data:', error);
    }
  };




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
  
    // const [imageSrc, setImageSrc] = useState('');
    // setImageSrc(data.imageUrl);
  return (
    <div>
      <h1>KK PRINTING MACHINES</h1>
      <p>Admin Dashboard</p>
      <h2>INVENTORY</h2>
      <div>CREATE NEW</div>
      <div>SELL</div>
      <div>
        <h1>CREATE NEW</h1>
        <form onSubmit={handleSubmit}>
          <div>
            productName:
            <input name="name" onChange={handleChange} value={name} type="text" />
          </div>
          <div>
            image:
            <input name="picture" onChange={handleChange} value={pic} type="file" />
          </div>
          <div>
            <button type="submit">DONE</button>
          </div>
        </form>
      </div>

<div>
  
<h1>BUY</h1>
        <ul className='div1'>
          {data.map((item, index) => (
            <div key={index}><Comp name = {item.name} image = {item.image}/></div>
            // <li key={index}><Comp name={item.name} /></li> // If Comp component exists
          ))}
        </ul>
</div>

    </div>
  );
}

export default App;
