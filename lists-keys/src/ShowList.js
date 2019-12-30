import React from 'react';


class ShowList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: props.items
        }
    }

    render() {
        const listItems = this.state.items.map((item) => 
            <ListItem key={item.toString()} item={item}></ListItem>
        );
        return(
            <ul>{listItems}</ul>
        );
    }
}

function ListItem(props) {
    return <li>{props.item}</li>
}

// function ShowList(props) {
//     const items = props.items;
//     const listItems = items.map((item) => 
//         <ListItem key={item.toString()} item={item}></ListItem>
//     );

//     return (
//         <ul>{listItems}</ul>
//     );
// }

export default ShowList;