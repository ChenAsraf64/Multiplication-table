// Create a 10x10 multiplication table
const data = [];
for (let i = 1; i <= 10; i++) {
  const row = [];
  for (let j = 1; j <= 10; j++) {
    row.push(i * j);
  }
  data.push(row);
}

// Add a header row at the top of the table
const headerRow = ["x", 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
data.unshift(headerRow);

// Add a header column at the left side of the table
for (let i = 1; i < data.length; i++) {
  data[i].unshift(i);
}

//Defines a function called createTable that creates a new table element.
const createTable = () => {
  const tableEl = document.createElement("table");
  tableEl.classList.add("multiplication-table"); 
  
  //create a row for each item
  data.forEach(item => {
    tableEl.appendChild(createRow(item))
  })

  return tableEl;
};

//Defines a function called createRow that creates a new table row element.
const createRow = (values) => {
  const rowEl = document.createElement("tr");
  
  //add the row content (the cells) by passing the row element and the values of the row. 
  addRowContent(rowEl, values, headerRow)
  return rowEl;
};

//This function creates a table cell element for each value in the values array, with a span element containing the value as its text content and the calculation as its tooltip.
const addRowContent = (row, values, headerRow) => {
  values.forEach((item, index) => {
    const col = document.createElement("td");
    const span = document.createElement("span");
    span.appendChild(document.createTextNode(item));
    span.title = `${values[0]} x ${headerRow[index]} = ${item}`;
    col.appendChild(span);
    row.appendChild(col);
  });
};

//Finds the element with the id attribute of "root" in the HTML document.
const rootEl = document.getElementById("root");

//Adds the table to the HTML document as a child of the rootEl element.
rootEl.appendChild(createTable());