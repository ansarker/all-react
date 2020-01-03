import React from 'react';
import './index.css';


function FancyBorder(props) {
    return(
        <div className={'FancyBorder FancyBorder-'+props.color}>
            {props.children}
        </div>
    );
}


function Dialog(props) {
    return(
        <FancyBorder color="blue">
            <h1 className="Dialog-title">
                {props.title}
            </h1>
            <p className="Dialog-message">
                {props.message}
            </p>
            {props.children}
        </FancyBorder>
    );
}

class SignUpDialog extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            login: ''
        }
    }

    handleChange = (e) => {
        this.setState({
            login: e.target.value
        });
    }

    handleSignUp = () => {
        alert(`Khobor ki, ${this.state.login}?`)
    }

    render() {
        return(
            <Dialog title="Pokemon GO" message="Just walk and walk!">
                <input value={this.state.login} onChange={this.handleChange}/>
                <button onClick={this.handleSignUp}>Sign up here</button>
            </Dialog>
        );
    }
}

export default SignUpDialog;