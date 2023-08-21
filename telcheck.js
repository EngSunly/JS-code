function telephoneCheck(str) {
    
    let re = /^1?\s?(\(\d{3}\)|\d{3})[-\s]?\d{3}[-\s]?\d{4}$/;
    if (!re.test(str)){
        return false;
    }
    
    return true;
  }
  
  telephoneCheck("555-555-5555");