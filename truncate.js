function truncateString(str, num) {
  var realStringLength = num - 3;
  var newString = str.slice(0,realStringLength) + "...";
  return newString;
}

truncateString("A-tisket a-tasket A green and yellow basket", 11);