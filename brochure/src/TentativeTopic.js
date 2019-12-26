import React from 'react';
import ShowAsList from './ShowAsList';

class TentativeTopic extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div>
                <h2>Tentative Topics</h2>
                <ShowAsList items={this.props.tentativeTopic}/>
            </div>
        );
    }
}

export default TentativeTopic;