import React, { useState } from 'react';
import './App.css';
import { Blog, IblogData } from './components/blog';

function App() {
  const [blogDatas, setblogDatas] = useState<IblogData[]>([
    {name: "Christian", text: "Jeg kan godt lige kage"},
    {name: "Mis (Min kat)", text: "Mere mad"}
  ]);

  return (
    <div className="App">
      <div className="content">
        <h1>Hej med dig</h1>
        {blogDatas.map((data) => (
          <Blog blogData={data}/>
        ))}
      </div>
    </div>
  );
}

export default App;
