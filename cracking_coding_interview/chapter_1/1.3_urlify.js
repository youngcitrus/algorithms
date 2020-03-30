function urlify(str) {
    const words = str.trim().split(' ');
    return words.join("%20");
  }
  console.log(urlify('Mr John Smith    '), 'Mr%20John%20Smith');
  
  const replaceUrlSpaces = (str) => {
    const convertToArray = str.trim().split('');
    for(let i in convertToArray) {
      console.log(i)
      if(convertToArray[i] === " ") {
       convertToArray[i] = "%20"
      }
    }
    return convertToArray.join('');
  }
  
   console.log(replaceUrlSpaces("Sai Charan P"));