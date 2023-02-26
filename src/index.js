module.exports = function check(str, bracketsConfig) {
  if (str.length % 2 != 0) {
    return false;
  }

  let arr = str;

  if (typeof (str) === 'string') {
    arr = str.split('');
  }
  
  for (let i = 0; i < bracketsConfig.length; i++) {
    if (bracketsConfig[i][0] != bracketsConfig[i][1] && (str[0] === bracketsConfig[i][1] || str[str.length - 1] === bracketsConfig[i][0])) {
      return false;
    }
  }
  
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < bracketsConfig.length; j++) {
      if (arr[i] === bracketsConfig[j][0] && arr[i + 1] === bracketsConfig[j][1]) {
        arr.splice(i, 2);
        return check(arr, bracketsConfig);
      }
    }
    
    if (i === arr.length - 1) {
      return false;
    }
  }
  
  return true;
}
