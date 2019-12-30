import React from 'react';
import Post from './Post';

class Blog extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            sidebar: (
                <ul>
                    {this.props.posts.map((post) =>
                        <li key={post.id}>
                            {post.title}
                        </li>
                    )}
                </ul>
            ),
            content: this.props.posts.map((post) =>
                <Post key={post.id} id={post.id} title={post.title} content={post.content}/>
            )
        }
    }

    render() {
        return(
            <div>
                {this.state.sidebar}
                <hr/>
                {this.state.content}
            </div>
        );
    }
}


// function Blog(props) {
//     const sidebar = (
//         <ul>
//             {props.posts.map((post) =>
//                 <li key={post.id}>
//                     {post.title}
//                 </li>
//             )}
//         </ul>
//     );

//     const content = props.posts.map((post) => 
//         <div key={post.id}>
//             <h3>{post.title}</h3>
//             <p>{post.content}</p>
//         </div>
//     );

//     return(
//         <div>
//             {sidebar}
//             {content}
//         </div>
//     );
// }

export default Blog;