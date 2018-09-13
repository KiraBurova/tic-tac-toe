import React from 'react';
import PropTypes from 'prop-types';

import './Restart.css';

export const Restart = (props) => {
    return <button className="restart-button" onClick={() => props.onClick()}>
        <span className="restart-button__text">Заново</span>
    </button>;
};

Restart.propTypes = {
    onClick: PropTypes.func.isRequired
};