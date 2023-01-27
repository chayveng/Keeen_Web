import React from 'react';

const IconList = (props) => {
  return (
    <img
    //   alt="Logo"
    style={{width:"3vh"}}
      // src="/static/images/IconHome.svg"
      src={props.active ? "/static/images/IconHomeAc.svg":"/static/images/IconHome.svg"}
      {...props}
    />
  );
}

export default IconList;
