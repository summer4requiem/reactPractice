import React from 'react';
import Header from "./components/Header/Header";
import './App.css';
import Profile from "./components/Profile/Profile";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import { BrowserRouter, Route } from "react-router-dom";
import NavigationContainer from './components/Navigation/NavigationContainer';


const App = (props) => {
  debugger;
  return (
    <BrowserRouter>
    <div className="App">
      <Header />
      <NavigationContainer store={props.store}/>
      <main className="main">
      <Route path="/profile" render={() => <Profile store={props.store} />} />
        <Route path="/news" render={() => <News />} />
        <Route path="/music" render={() => <Music />} />
        <Route exact path="/dialogs" render={() => <DialogsContainer store ={props.store}/>} />
      </main>
    </div >
  </BrowserRouter>
  );
} 

export default App;
