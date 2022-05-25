import React, { useState } from 'react';
import './App.css';
import { Blog, IblogData } from './components/blog';
import { addDatatoTable, getDataFromTable, IblogDataDB } from './services/DBService';

function App() {
  const [blogDatas, setblogDatas] = useState<IblogData[]>([
    {name: "Christian", text: "Jeg kan godt lige kage"},
    {name: "Mis (Min kat)", text: "Mere mad"}
  ]);

  const handleClick = () => {
    let data: IblogDataDB = {
      name: 'Christian',
      text: 'Jeg kan godt lige kage'
    }

    addDatatoTable(data);
  }

  const handleGetClick = async () => {
    let data: IblogDataDB | undefined = await getDataFromTable(1);

    console.log(data);
  }

  return (
    <div className="App">
      <button onClick={handleClick}>Add Data</button>
      <button onClick={handleGetClick}>Get Data</button>
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
