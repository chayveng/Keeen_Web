import React from 'react';

const IconPer = (props) => {
  return (
    <img
    //   alt="Logo"
    style={{width:"3vh"}}
      // src="/static/images/merchantadmin/Group1160.svg"
    //   src={"/static/images/personnel.svg"}
      src={props.active ? "/static/images/perAc.svg":"/static/images/personnel.svg"}
      {...props}
    />
  );
}

export default IconPer;
