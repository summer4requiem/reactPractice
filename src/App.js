import React from 'react';
import Tecknologies from "./Tecknologies";
import Header from "./Header";
import './App.css';
import Profile from "./components/profile";


const App = () => (
  <div className="App">
    <Header />
    <nav className="navigation">
      <Tecknologies />
    </nav>
    <main>
      <div className="posts__img">
        <img src="https://freestocks.org/fs/wp-content/uploads/2020/07/wheat_field_2-1000x667.jpg" alt="" width="100%" height="160" />
      </div>
      <Profile />
    </main>
  </div >
);

export default App;
