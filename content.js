if (window.location.href.includes("my.clyde")) {

  var tables = document.getElementsByTagName('tbody');
  var totalViewings = document.getElementsByClassName('xspDataTableViewPanelFooterMiddle')

  var viewingsTable = tables[3].rows

  var myRows = []
  var cellContent = []

  for (var row of viewingsTable) {
    myRows.push(row.cells)
  }

  var counter = 1

  for (var cell of myRows.slice(0).reverse()) {
    var dateString = cell[0]
    dateString.innerText = counter + ". " + dateString.innerText
    counter++
  }

  totalViewings[0].innerHTML = "<strong>"+ myRows.length + ` ${myRows.length > 1 ? "viewings" : "viewing"}`+"</strong>"

  console.log(window.location.href);

}
