import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import SignUpDialog from './Dialog';


// FancyBorder

function FancyBorder(props) {
    return(
        <div className={'FancyBorder FancyBorder-'+props.color}>
            {props.children}
        </div>
    );
}

function WelcomeDialog(props) {
    return(
        <FancyBorder color='blue'>
            <h1 className='Dialog-title'>{props.title}</h1>
            <p className='Dialog-message'>{props.message}</p>
        </FancyBorder>
    );
}

// SplitPane

function SplitPane(props) {
    return(
        <div className="SplitPane">
            <div className="SplitPane-left">
                {props.left}
            </div>
            <div className="SplitPane-right">
                {props.right}
            </div>
        </div>
    );
}

function Contacts() {
    return <div className="Contacts" />;
}

function Chat() {
    return <div className="Chat" />;
}

function App() {
    return(
        <SplitPane left={<Contacts/>} right={<Chat/>}/>
    );
}


// ReactDOM.render(<WelcomeDialog  title='Welcome' message='Thanks for your support! Now go.'/>, document.getElementById('root'));
// ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<SignUpDialog />, document.getElementById('root'));


serviceWorker.unregister();
