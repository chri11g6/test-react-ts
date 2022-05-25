import { useEffect, useState } from 'react';
import './App.css';
import { Blog } from './components/blog';
import { InputForm } from './components/inputForm';
import { getAllDataFromTable, IblogData } from './services/DBService';

function App() {
  const [blogDatas, setblogDatas] = useState<IblogData[]>([]);

  const loadData = () => {
    getAllDataFromTable().then(data => setblogDatas(data));
  }

  useEffect(() => {
    loadData();
  })

  return (
    <div className="App">
      <InputForm />
      <div className="content">
        <h1>Hej med dig</h1>
        {blogDatas.map((data) => (
          <Blog key={data.id} blogData={data}/>
        ))}
      </div>
    </div>
  );
}

export default App;
