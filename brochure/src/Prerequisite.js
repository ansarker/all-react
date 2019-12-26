import React from 'react';
import ShowAsList from './ShowAsList';


class Prerequisite extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div>
                <h2>Prerequisite</h2>
                <ShowAsList items={this.props.prerequisite} />
            </div>
        );
    }
}

export default Prerequisite;