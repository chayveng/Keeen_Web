import React from 'react';

const IconUpload = (props) => {
  return (
    <img
    //   alt="Logo"
    style={{width:"3vh"}}
      // src="/static/images/merchantadmin/Group1160.svg"
      src={props.active ? "/static/images/IconDocAc.svg":"/static/images/Doc.svg"}

      {...props}
    />
  );
}

export default IconUpload;
