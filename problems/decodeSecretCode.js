function decodeSecretCode(s) {
  if (typeof s !== "string" || s.length === 0 || s == null) {
    return null;  // or false — depends on your requirement
  }
  if (s.length % 2 !== 0) return false;

  for (let i = 0; i < s.length; i++) {
    
    const ch = s[i];

    if (i % 2 === 0) {
      // odd position (0-based): MUST be a letter
      if (!/[a-zA-Z]/.test(ch)) return false;
    } else {
      // even position: MUST be a digit
      if (!/[0-9]/.test(ch)) return false;
    }
  }

let finalString = ""
  for (let i = 0; i < s.length; i++) {
    let a = s[i]
    let b = s[++i]
    let code1 = a.charCodeAt()
    console.log("---------------------")
    console.log(code1)
    console.log(b)
    console.log("---------------------")
    let finalCode = code1+Number(b)
    let res = String.fromCharCode(finalCode)
    console.log(res)
    finalString = finalString + "" + res;
    console.log(finalString)
  }
}

console.log(decodeSecretCode("a2b3c1"))