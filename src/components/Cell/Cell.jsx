import React from 'react';

import './Cell.css';

export const Cell = (props) => {
    return <div className="cell" onClick={() => props.onClick()}>
        {props.value}
    </div>
}