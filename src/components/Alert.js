import React from 'react';

function Alert(props) {
    return (
        <div className="alert alert-secondary" role="alert">
            {props.message}
        </div>
    );
}

export default Alert;
