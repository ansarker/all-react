import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import List from './List';
import Blog from './Blog';
import * as serviceWorker from './serviceWorker';

const posts = [
    {id: 0, title: 'Introduction', content: 'Introduction to ReactJS'},
    {id: 1, title: 'Installation', content: 'Install React using npm'},
    {id: 2, title: 'Start', content: 'Use npx create-react-app app-name'}
];

// ReactDOM.render(<List />, document.getElementById('root'));
ReactDOM.render(<Blog posts={posts}/>, document.getElementById('root'));

serviceWorker.unregister();
