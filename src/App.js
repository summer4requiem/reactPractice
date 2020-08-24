import React from 'react';
import Navigation from "./components/navigation";
import Header from "./components/header";
import './App.css';
import Profile from "./components/profile";
import Music from "./components/music";
import News from "./components/news";
import Dialogs from "./components/dialogs";
import { BrowserRouter, Route} from "react-router-dom";


const App = () => (
  <BrowserRouter>
    <div className="App">
      <Header />
      <Navigation />
      <main className="main">
        <Route path="/profile" component={Profile} />
        <Route path="/news" component={News} />
        <Route path="/music" component={Music} />
        <Route path="/dialogs" component={Dialogs} />
      </main>
    </div >
  </BrowserRouter>
);

export default App;
