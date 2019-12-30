import React from 'react';


class Post extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: props
        }
    }

    render() {
        return(
            <div>
                <h3>{this.state.posts.title}</h3>
                <p>{this.state.posts.content}</p>
            </div>
        );
    }
}

export default Post;