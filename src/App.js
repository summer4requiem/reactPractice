import React from 'react';
import Header from "./components/Header/Header";
import './App.css';
import Profile from "./components/Profile/Profile";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import { BrowserRouter, Route } from "react-router-dom";
import NavigationContainer from './components/Navigation/NavigationContainer';


const App = () => {
  return (
    <BrowserRouter>
    <div className="App">
      <Header />
      <NavigationContainer/>
      <main className="main">
      <Route path="/profile" render={() => <Profile/>} />
        <Route path="/news" render={() => <News />} />
        <Route path="/music" render={() => <Music />} />
        <Route exact path="/dialogs" render={() => <DialogsContainer/>} />
      </main>
    </div >
  </BrowserRouter>
  );
} 

export default App;
