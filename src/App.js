import './App.css';
import EntryCard from './Components/EntryCard';
import React, { useState } from 'react';

function App() {
  const [title, setTitle] = useState('Welcome');
  const [blogEntries, setBlogEntries] = useState([
    {
      entryTitle: 'First Entry',
      content: 'Please describe your first entry',
      picture:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT66XN3Fn_DN2naslk26aMeTGICdf6kbekGEA&usqp=CAU',
    },
    {
      entryTitle: 'Second Entry',
      content: 'Please describe your Second entry',
      picture:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRK45cvKulouUzwvqMg1GK6tgOSB6FoOAemJw&usqp=CAU',
    },
    {
      entryTitle: 'Third Entry',
      content: 'Please describe your Third entry',
      picture:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnMns9FNAF4OeiV9C_i22iSYEbwE1UPLZVdQ&usqp=CAU',
    },
    {
      entryTitle: 'Fourth Entry',
      content: 'Please describe your Third entry',
      picture:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhjvWt-rXSyRsTMHNjO-XKcZ9h9TgLiygsLw&usqp=CAU',
    },
  ]);
  const [entry, setEntry] = useState({});

  const changeHandler = (event) => {
    const value = event.target.value;
    const property = event.target.name;
    console.log(value);
    setEntry({ ...entry, [property]: value });
  };

  const saveHandler = () => {
    setBlogEntries([...blogEntries, entry]);
  };
  return (
    <div className="App">
      <h1>{title}</h1>
      <div className="main-wrapper">
        <div className="form-wrapper">
          <form action="">
            <div className="form-group">
              <label htmlFor="">Title</label>
              <input type="text" name="entryTitle" onChange={changeHandler} />
            </div>
            <div className="form-group">
              <label htmlFor="">Content</label>
              <input type="text" name="content" onChange={changeHandler} />
            </div>
            <div className="form-group">
              <label htmlFor="">Image</label>
              <input type="text" name="picture" onChange={changeHandler} />
            </div>
            <button type="button" onClick={saveHandler}>Submmit</button>
          </form>
        </div>
        <div className="entries-wrapper">
          {blogEntries.map((entry, index) => (
            <EntryCard entryData={entry} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
