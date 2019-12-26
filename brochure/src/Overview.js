import React from 'react';


class Overview extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div>
                <h2>Overview</h2>
                <p>{this.props.overview}</p>
            </div>
        );
    }
}

export default Overview;