function truncateString(str, num) {
  // real string length for limits less than 3 
  var realStringLength = num - 3;

  // check whether the num limit is less than string length 
  // also that the num limit is greater than 3 so ellipses don't ruin
  if (num < str.length && num > 3) {
    str = str.slice(0, realStringLength) + "...";
  }
  // for small limits that would have the ellipses ruin 
  else if (num < 3) {
    str = str.slice(0, num) + "...";
  }
  
  // return string 
  return str;
}

truncateString("A-", 1);
