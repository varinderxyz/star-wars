import React from 'react';

const LoadingSkeleton = ({ className = '' }) => (
    <div className={`skeleton-loader ${className}`}>
        <div className="skeleton skeleton-title"></div>
        <div className="skeleton skeleton-paragraph"></div>
        <div className="skeleton skeleton-paragraph"></div>
        <div className="skeleton skeleton-title"></div>
        <div className="skeleton skeleton-paragraph"></div>
        <div className="skeleton skeleton-paragraph"></div>
    </div>
);

export default LoadingSkeleton;