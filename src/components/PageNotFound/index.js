import React from 'react';

const PageNotFound = props => {
  if (props.staticContext) {
    props.staticContext.NOT_FOUND = true;
  }
  return <div>sorry, page not found</div>;
};

export default PageNotFound;
