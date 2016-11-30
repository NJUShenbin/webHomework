import React, {PropTypes} from "react"

function VCenterDiv({style,children}) {

  let defaultStyle = {
    display:'flex',
    alignItems:'center',
  };

  style = {...defaultStyle,...style};

  return(
    <div style={style} >
      {children}
    </div>
  )
}

export default VCenterDiv;
