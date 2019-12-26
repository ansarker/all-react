import React from 'react';


class Title extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div>
                <h1>{this.props.title}</h1>
            </div>
        );
    }
}

export default Title;