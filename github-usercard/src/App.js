import React from "react"
import axios from 'axios'
import UserForm from './Components/UserForm'
import UserCard from './Components/UserCard'
import './App.css';


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      gitHubUserData: [],
      primaryUser: ""
    }
  }

setPrimaryUser = (input) =>{
  this.setState({
    ...this.state,
    primaryUser: input
  })
}

fetchUser = (user) => {
  axios.get(`https://api.github.com/users/${user}`)
    .then(res => {
      console.log(res.data);
      this.setState({
        ...this.state,
        gitHubUserData: [...this.state.gitHubUserData, res.data]
      })
    })
}

getFollowers = (user) => {
  axios.get(`https://api.github.com/users/${user}/followers`)
    .then(res => {
      console.log(res.data)
      res.data.forEach(follower => this.fetchUser(follower.login));
    })
}

componentDidUpdate(prevProps, prevState) {
  if(prevState.primaryUser !== this.state.primaryUser){
    this.setState({
      ...this.state,
      gitHubUserData: []
    })
    this.fetchUser(this.state.primaryUser)
    this.getFollowers(this.state.primaryUser)
    console.log(this.state.gitHubUserData);
  }
}

  render() {
    return (
      <div className="App">
        <h1>GitHub User Data Tool</h1>
        <UserForm setPrimaryUser={this.setPrimaryUser}/>
        <div>
        {this.state.gitHubUserData.map(e => 
          <UserCard data={e}/>)}
        </div>
      </div>
    );
  }
}

export default App;
