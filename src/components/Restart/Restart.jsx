import React from 'react';
import PropTypes from 'prop-types';

import './Restart.css';

export const Restart = (props) => {
    return <button onClick={() => props.onClick()}>Заново</button>;
};

Restart.propTypes = {
    onClick: PropTypes.func.isRequired
};