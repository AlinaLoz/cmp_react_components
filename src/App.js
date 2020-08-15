import React, { useState, useEffect } from 'react';
import './App.css';

// import ClassComponent from './components/class-component';
// import FuncComponent from './components/func-component';

const ClassComponent = React.lazy(() => import('./components/class-component'));
const FuncComponent = React.lazy(() => import('./components/func-component'));

function App() {
  const [testList, setTestList] = useState([1]);

  useEffect(() => {
    setTimeout(() => {
      testList.push(2);
      console.log('setTimeout testList', testList);
      setTestList(testList);
    }, 5000);
    setTimeout(() => {
      testList.push(3);
      console.log('setTimeout testList', testList);
      setTestList([...testList]);
    }, 10000);

  }, []);

  return (
    <div className="App">
      <ClassComponent title='test' testList={testList} />
      <FuncComponent  title='test' testList={testList} />
    </div>
  );
}

export default App;
