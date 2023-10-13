
function calculate() {
  var num1 = document.getElementById("num1").value;
  var num2 = document.getElementById("num2").value;
  var gstInput = document.getElementById("gst").value;

  if (num1 === "" || num2 === "" || gstInput=="" ) {
    alert("Please fill in both numbers.");
  } else {
    var sum = parseFloat(num1) + parseFloat(num2);
    var gstAmount=parseFloat(gstInput);
    var gstValue = sum+((sum*gstAmount)/100);
    document.getElementById("result").innerHTML = "Sum: " + sum;
    document.getElementById("result-with-gst").innerHTML = "Sum: " + gstValue;
  }
}