function result() {
  var sidea = parseInt(document.getElementById('fvalue'));
  var sideb = parseInt(document.getElementById('svalue'));
  var sidec = parseInt(document.getElementById('tvalue'))

  if (sidea+sideb<=sidec||sideb+sidec<=sidea||sidea+sidec<=sideb) {
    document.getElementById('result').innerHTML="This values do NOT make a triangle"
  }
  else if (sidea===sideb && sidea===sidec) {
    document.getElementById('result').innerHTML="This is an equilateral triangle"
  }
  else if (sidea!==sideb && sideb!==sidec && sidea!==sidec) {
    document.getElementById('result').innerHTML="This is a scalene triangle"
  }
  else (sidea===sideb || sideb===sidec || sidea===sidec){
    document.getElementById('result').innerHTML="This is an isosceles triangle"
  }
}
