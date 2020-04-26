import React from 'react';
import {db, SignOut} from '../Authentication/auth'
import AdminDashboard from './AdminDashboard'
import UserDashboard from './UserDashboard'
import '../App.css';

class Dashboard extends React.Component{
  constructor(props) {
    super(props);
    this.state = { userType: ''}
  }
  componentDidMount(){
    db.collection("Users").doc(this.props.userInfo.uid).get()
      .then(doc => {
      if (doc.exists) {
         if (doc.data().type === 'admin') {
             this.setState({userType: doc.data().type});
         }
         else if (doc.data().type === 'user') {
          this.setState({userType: doc.data().type});
         }
         else{
             console.log("Neither Admin, nor User, error");
         }
      } else {
         alert('User Doesnt Exist!!!')
      }
    })
  }
  render(){
    var {userInfo, isAuthenticated} = this.props;
    console.log(isAuthenticated);
    return (
        <div className="login bg-lightWhite h-full lg:h-screen">
            <div style={{display: 'none'}} >Hey <b style={{color: 'blue'}}>{this.state.userType}</b> {userInfo.email}
            <button style={{border:"1px solid dimgrey", textAlign: 'right'}} onClick={SignOut}>Sign out</button>
            </div>
          {this.state.userType === 'admin' ?
            <AdminDashboard userInfo={userInfo} isAuthenticated = {isAuthenticated} />:
            this.state.userType === 'user' ? 
            <UserDashboard />
            :
            null 
          }
        </div>
    ) 
  }
}



export default Dashboard;
