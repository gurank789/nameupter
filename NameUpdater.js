import {useState} from 'react';
import './Nameupdater.css';



function NameUpdater() {
    const [name, setName] = useState('');
  
    const handleSubmit = (event) => {
      event.preventDefault();
      // Do something with the name, such as updating it in the heading text
      document.getElementById('heading').innerText = `Hello ${name}!`;
      // Clear the input field
      setName('');
    }
  
    return (
      <div className="container">
        <h1 id="heading">Hello ****!</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Enter your name:</label>
          <input 
            type="text" 
            id="name" 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
  
  export default NameUpdater;