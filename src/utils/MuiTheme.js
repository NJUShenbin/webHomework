import getMuiTheme from 'material-ui/styles/getMuiTheme';

import {orange300

  as primary1Color,
  teal500 as primary2Color,
  lightBlue200 as accent1Color,
}from 'material-ui/styles/colors';

const muiTheme = getMuiTheme({
  palette: {
    primary1Color,
    primary2Color,
    accent1Color,
  },
  fontFamily: [
    "Microsoft YaHei UI",
    "Microsoft Yahei",
    "PingFang SC",
    "Lantinghei SC",
    "Hiragino Sans GB",
    "WenQuanYi Micro Hei",
    "WenQuanYi Zen Hei",
    "Noto Sans CJK SC",
    "Microsoft JhengHei UI",
    "Microsoft JhengHei",
    "PingFang TC",
    "Lantinghei TC",
    "Noto Sans CJK TC",
    "Helvetica Neue",
    "Helvetica",
  ]
});

export default {
  theme : muiTheme,
  primaryColor : muiTheme.palette.primary1Color,
  secondaryColor : muiTheme.palette.accent1Color
}
