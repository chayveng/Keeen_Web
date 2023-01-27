import React from 'react';

const IconProd = (props) => {
  return (
    <img
    //   alt="Logo"
    style={{width:"3vh"}}
      // src="/static/images/merchantadmin/Group1160.svg"
    //   src={"/static/images/personnel.svg"}
      src={props.active ? "/static/images/product.svg":"/static/images/product.svg"}
      {...props}
    />
  );
}

export default IconProd;
