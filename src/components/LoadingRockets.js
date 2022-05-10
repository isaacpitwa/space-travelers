import React from 'react';

const LoadingRockets = () => (
  <>
    <LoadingRocket />
  </>
);

export default LoadingRockets;

const LoadingRocket = () => (
  <div className="rocket">
    <div className="image-container" />
    <div className="content">
      <div className="name-placeholder" />
      <div className="desc-placeholder">
        <div className="desc-line" />
        <div className="desc-line" />
        <div className="desc-line" />
      </div>
      <div className="btn-placeholder" />
    </div>
  </div>
);
