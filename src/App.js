import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { auth }  from './Authentication/auth';
// Components
import LoadingImg from './img/loading.gif'
import Dashboard from './Dashboard/dashboard'
import LogIn from './Authentication/login'

class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {isAuthenticated: false, userInfo: [] }
  }

  render(){
    var {isAuthenticated, userInfo} = this.state;
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route path="/"  render={() => <LogIn />} exact />
          {isAuthenticated ? 
            <Route path="/dashboard" render={() => <Dashboard isAuthenticated={isAuthenticated} userInfo={userInfo} /> }  />
          : <Loader />
            }
          </Switch>
        </BrowserRouter>
      </div>
    ) 
  }
  componentDidMount() {     
    auth.onAuthStateChanged((user) => { 
      if(user){
        console.log("User : " ,user);
        this.setState({
          isAuthenticated: true,
          userInfo: user,
        })
      }else {
        this.setState({
          isAuthenticated: false
        })
      }
    })
  }
}


const Loader = () => {
  return <div style={{display: 'block'}} > <img src={LoadingImg} style={{ margin: "10% auto"}} alt='' /> </div>
}


export default App;
