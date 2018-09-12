import React from 'react';

import './Restart.css';

export const Restart = (props) => {
    return <button onClick={() => props.onClick()}>Заново</button>
}