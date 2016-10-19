import dateFormat from '../utils/DateFormat'

let date = new Date();
console.log(dateFormat(date,"MM月dd日"))
date.setDate(0);
console.log(dateFormat(date,"MM-dd"))

