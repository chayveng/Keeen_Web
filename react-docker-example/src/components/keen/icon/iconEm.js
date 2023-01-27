import React from 'react';

const IconEm = (props) => {
  return (
    <img
    //   alt="Logo"
    style={{width:"3vh"}}
      // src="/static/images/merchantadmin/Group1160.svg"
    //   src={"/static/images/personnel.svg"}
      src={props.active ? "/static/images/iconEmAc.svg":"/static/images/empoyee.svg"}
      {...props}
    />
  );
}

export default IconEm;
