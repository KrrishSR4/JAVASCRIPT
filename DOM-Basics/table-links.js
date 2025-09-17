// certain dom elements may provide additional properties specific to their type for conveneince. Table element supports the following properties:- 

table.rows; //collection of tr elements
table.caption; //gives the caption element of the table
table.tHead; //gives the thead element of the table
table.tBodies; //collection of tbody elements of the table
table.tFoot; //gives the tfoot element of the table
tbody.rows; //collection of tr elements in the tbody
tr.cells; //collection of td and th elements in the tr
tr.sectionRowIndex; //gives the index of the tr in the tbody
tr.rowIndex; //gives the index of the tr in the table
td.cellIndex; //gives the index of the td or th in the tr
th.cellIndex; //gives the index of the td or th in the tr