function validateForm() {
    let x = document.forms["myForm"]["flname"].value;
    if (x == "") 
    {
      alert("Name must be filled out");
      return false;
    }
}