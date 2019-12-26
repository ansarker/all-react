import React from 'react';

function ShowAsList(props) {
    const items = props.items;
    const listItems = items.map((items) =>
        <li>{items}</li>
    );

    return (
        <ul>{listItems}</ul>
    );
}

export default ShowAsList;