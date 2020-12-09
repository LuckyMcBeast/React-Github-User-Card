import React from "react"

class UserForm extends React.Component {
    constructor(){
        super();
        this.state = {
            gitHubUser: ''
        };
    }

    handleChange = (e) => {
        this.setState({
            ...this.state,
            gitHubUser: e.target.value
        })
        console.log(this.state.gitHubUser)
    }

    submitUser = (e) => {
        e.preventDefault();
        this.props.setPrimaryUser(this.state.gitHubUser);
        this.setState({ gitHubUser: "" });
    };

    render() {
        return (
            <form onSubmit={this.submitUser}>
                <input
                    value={this.state.gitHubUser}
                    onChange={this.handleChange}
                    name="user"
                    type="text"
                />
                <button>Git User</button>
            </form>
        )
    }

}

export default UserForm;