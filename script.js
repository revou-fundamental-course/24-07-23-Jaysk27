function validateForm() {
    let x = document.forms["myForm"]["flname"].value;
    if (x == "") 
    {
      alert("Cannot Be Blank");
      return false;
    }
}