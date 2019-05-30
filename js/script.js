function data_ajax() {
  var first = document.getElementById("first").value;
  var last = document.getElementById("last").value;

  if (first <= 0) {
    if (last <= 0) {
      alert(
        "The first and the last number are not numbers or the numbers is less or iqual to zero."
      );
      return false;
    } else {
      alert(
        "The first number is not a number or the number is less or iqual to zero."
      );
      return false;
    }
  } else if (last <= 0) {
    alert(
      "The last number is not a number or the number is less or iqual to zero."
    );
    return false;
  }

  var cadena = "first=" + first + "&last=" + last;
  var petition = ConstructorXMLHttpRequest();

  if (petition) {
    petition.open("POST", "functions/calculate.php", true);
    petition.setRequestHeader(
      "Content-type",
      "application/x-www-form-urlencoded"
    );
    petition.send(cadena);

    petition.onreadystatechange = function() {
      if (petition.readyState == 4)
        document.getElementById("mostrar").innerHTML = petition.responseText;
      $("#example")
        .DataTable()
        .destroy();
      $("#example").DataTable({
        processing: true,
        language: {
          loadingRecords: "&nbsp;",
          processing: "Loading..."
        },
        columns: [
          {
            data: "ID"
          },
          {
            data: "Value"
          }
        ]
      });
    };
  }
  document.getElementById("mostrar").style.display = "block";
}
