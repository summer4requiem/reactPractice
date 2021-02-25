import React from "react";
import HeaderContainer from "./components/Header/HeaderContainer";
import "./App.css";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import { BrowserRouter, Route } from "react-router-dom";
import NavigationContainer from "./components/Navigation/NavigationContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import Login from "./components/Login/Login";
import { initializeApp } from "./Redux/app-reducer";
import { connect } from "react-redux";
import Preloader from "./components/Users/preloader";
import store from './Redux/redux-store';
import { Provider } from 'react-redux';

class App extends React.Component {
  componentDidMount() {
    this.props.initializeApp();
  }
  render() {
    if (!this.props.initialized) {
      return <Preloader />;
    }
    return (
      
        <div className="App">
          <HeaderContainer />
          <NavigationContainer />
          <main className="main">
            <Route
              path="/profile/:userId?"
              render={() => <ProfileContainer />}
            />
            <Route path="/news" render={() => <News />} />
            <Route path="/users" render={() => <UsersContainer />} />
            <Route path="/music" render={() => <Music />} />
            <Route path="/login" render={() => <Login />} />
            <Route exact path="/dialogs" render={() => <DialogsContainer />} />
          </main>
        </div>

    );
  }
}

const mapStateToProps = (state) => {
  return {
    initialized: state.app.initialized,
  };
};

let AppContainer = connect(mapStateToProps, { initializeApp })(App);

const MainApp = (props) => (
  <BrowserRouter>
    <Provider store={store}>
    <AppContainer />
  </Provider>;
  </BrowserRouter>
);

export default MainApp;

// export default connect(mapStateToProps, { initializeApp })(App);
