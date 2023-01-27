import React from 'react';

const IconYou = (props) => {
  return (
    <img
    //   alt="Logo"
    style={{width:"3vh"}}
      // src="/static/images/merchantadmin/Group1160.svg"
      src={props.active ? "/static/images/YouTubeAc.svg":"/static/images/YouTube.svg"}


      {...props}
    />
  );
}

export default IconYou;
