import React from 'react';

const ErrorComponent = ({ message, onRetry }) => {
    return (
        <div className="error-container">
            <h2 className="error-heading">Error Loading Films</h2>
            <p className="error-message">{message}</p>
            <button className="retry-button" onClick={onRetry}>Retry</button>
        </div>
    );
};

export default ErrorComponent;