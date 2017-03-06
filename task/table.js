//---1.1---
var headers = ["name","mark","language"];

var data = [{
    language: 'JavaScript',
    mark: 8
},
{
    name: 'Anna',
    language: 'Ruby'
},
{
    name: 'Olga',
    mark: 5
}];


function Table(headers,data){
	this.headers = headers;
	this.rows = [];
 	data.forEach(function(item,i){
		this.rows[i] = headers.map(function(el){
			return this.rows[i] = item[el];
		},this)
	},this);
};
var table = new Table(headers,data);
// table.rows


//---1.2---
table.addRow = function addRow(arr){
	this.rows.push(arr);
}
// table.addRow(['John', 'PHP', 5]);
// table.rows;


table.addRows = function addRows(arr){
	arr.map(function (el) {
		return this.rows.push(el);
	}, this);
}
// table.addRows([['Mike', 'Go', 3], ['Mila', 'Java', 10]]);
// table.rows


table.removeRow = function removeRow(i){
	this.rows.splice(i,1);
}
// table.removeRow(0);
// table.rows;
// table.removeRow(1);
// table.rows;


table.addColumn = function addColumn(nameCol,arr){
	this.headers.push(nameCol);
	arr.map(function(el,ind){
		return this.rows[ind].push(el);
	},this)
}
// table.addColumn('surname', ['Smith', 'Ivanov', 'Bregovich']);
// table.headers;
// table.rows;


table.showSize = function showSize(){
	return {
		rows: this.rows.length,
		columns: this.headers.length
	};
}
// table.showSize(); 
// table.removeRow(0);
// table.rows; 
// table.showSize();


table.sort = function sort(indCol,str){
	
}


table.filterBy = function filterBy(header) {
	
}


table.getData = function getData() {
	
}