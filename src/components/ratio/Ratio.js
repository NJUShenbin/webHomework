import React, {PropTypes} from "react"
import RatioStyle from './Ratio.less'

function Ratio({ratio,children}) {
  const ratioStr = ratio*100 + "%";
  let style = {
    paddingBottom: ratioStr
  };
  return(
    <div className={RatioStyle.ratio} style={style} >
      {children}
    </div>
  )
}
Ratio.PropTypes = {
  ratio : PropTypes.number.isRequired
};

export default Ratio;
