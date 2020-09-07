import React from 'react';
import Navigation from "./components/Navigation/Navigation";
import Header from "./components/Header/Header";
import './App.css';
import Profile from "./components/Profile/Profile";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import Dialogs from "./components/Dialogs/Dialogs";
import { BrowserRouter, Route } from "react-router-dom";


const App = (props) => {
  debugger;
  return(
    <BrowserRouter>
    <div className="App">
      <Header />
      <Navigation state={props.state.messagesPage}/>
      <main className="main">
        <Route path="/profile" render={() => <Profile state={props.state.profilePage}  addPost = {props.addPost} updatePostFieldText = {props.updatePostFieldText}/>} />
        <Route path="/news" render={() => <News />} />
        <Route path="/music" render={() => <Music />} />
        <Route exact path="/dialogs" render={() => <Dialogs state={props.state.messagesPage} addMessage = {props.addMessage} updateMessageFieldText = {props.updateMessageFieldText} />} />
      </main>
    </div >
  </BrowserRouter>
  );
}

export default App;
