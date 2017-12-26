import React from 'react';


import PrivateHeader from './PrivateHeader';

//stateless functional component
export default () => {
  return (
    <div>
      <PrivateHeader title="Dashboard"/>
      <div className="page-content">
        dashboard page content.
      </div>
    </div>
  );
};
