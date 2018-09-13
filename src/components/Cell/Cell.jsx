import React from 'react';

import PropTypes from 'prop-types';

import './Cell.css';

export const Cell = (props) => {
    return <div className="cell" onClick={() => props.onClick()}>
        {props.value}
    </div>;
};

Cell.propTypes = {
    onClick: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired
};