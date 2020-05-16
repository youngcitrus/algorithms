function flattenDictionary(dict) {
    // your code goes here
    flatDictionary = {};
    flattenDictionaryHelper('', dict, flatDictionary);
    return flatDictionary;
  }
  
  function flattenDictionaryHelper(initialKey, dict, flatDictionary) {
    for (const key in dict) {
      let value = dict[key];
      if (typeof(value) === 'string' || typeof(value) === 'number') {
        if (initialKey === '') flatDictionary[key] = value;
        else if (key === '') flatDictionary[initialKey] = value;
        else flatDictionary[initialKey + '.' + key] = value
      } else {
        let newKeyString;
        if (initialKey === '') newKeyString = key;
        else if (key === '') newKeyString = initialKey;
        else newKeyString = initialKey + '.' + key;
        flattenDictionaryHelper(newKeyString, value, flatDictionary);
      }
    }
  }
  
  console.log(flattenDictionary({"":"1",
                                 "Key2":{"a":"2",
                                         "b":"3",
                                         "c":{"d":"3",
                                              "":{
                                                "":"1"
                                                 }
                                             }
                                        }
                                }))