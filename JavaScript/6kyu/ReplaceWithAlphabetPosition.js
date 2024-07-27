function alphabetPosition(text) {
    let res = "";
    const uppercaseText = text.toUpperCase();
    for (let i = 0; i < uppercaseText.length; i++) {
      let charCode = uppercaseText.charCodeAt(i);
      if (charCode >= 65 && charCode <= 90) {
        res += (charCode - 64) + " ";
      }
    }
    return res.trim();
  }
  console.log(alphabetPosition("The sunset sets at twelve o' clock."))