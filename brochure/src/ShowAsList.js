import React from 'react';

function ShowAsList(props) {
    const items = props.items;
    const listItems = items.map((items) =>
        <li key={items}>{items}</li>
    );

    return (
        <ul>{listItems}</ul>
    );
}

export default ShowAsList;