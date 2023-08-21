function palindrome(str) {

    let re = /[\W_]/g;
    let lowRegStr = str.toLowerCase().replace(re, '');
    console.log(lowRegStr);
    let reverseStr = lowRegStr.split('').reverse().join('');
    console.log(reverseStr);
    if (reverseStr !== lowRegStr)
      return false;
    else{

        return true;
    }
  }
  
  palindrome("A man, a plan, a canal. Panama")
  palindrome("nope")