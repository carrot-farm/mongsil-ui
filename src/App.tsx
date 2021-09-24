import * as React from 'react';

// import './App.css';

function App(): any {
  return (
    <div className="app bg-base">
      <div className="p-5 flex">
        <div className="w-20 h-20 bg-base emboss-100 "></div>
        <div className="w-20 h-20 bg-base emboss-200 ml-10"></div>
        <div className="w-20 h-20 bg-base emboss-300 ml-10"></div>
        <div className="w-20 h-20 bg-base emboss-400 ml-10"></div>
        <div className="w-20 h-20 bg-base emboss-500 ml-10"></div>
      </div>
      <div className="p-5 flex ">
        <div className="w-20 h-20 bg-base dent-100 "></div>
        <div className="w-20 h-20 bg-base dent-200 ml-10"></div>
        <div className="w-20 h-20 bg-base dent-300 ml-10"></div>
        <div className="w-20 h-20 bg-base dent-400 ml-10"></div>
        <div className="w-20 h-20 bg-base dent-500 ml-10"></div>
      </div>
    </div>
  );
}

export default App;
