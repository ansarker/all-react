import React from 'react';
import ShowList from './ShowList';


class List extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            names: ['Luffy', 'Zoro', 'Sanji', 'Nami', 'Usopp', 'Robin', 'Chopper', 'Franky']
        }
    }

    render() {
        return(
            <div>
                <h1>One Piece</h1>
                <ShowList items={this.state.names}/>
            </div>
        );
    }
}


export default List;