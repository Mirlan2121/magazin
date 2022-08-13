import React from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar_main from './componetns/navbar/Navbar_main';
import Content from './componetns/content/Content';

function App() {
  return (
    <div className="App">
      <Navbar_main/>

      <Content/>

    </div>
  );
}

export default App;
