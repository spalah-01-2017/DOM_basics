var headers = ['name', 'mark', 'language'];
var rows = [
	{
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
  },
];

function Table(arr, arrObj) {
	this.headers = arr;
  this.rows = arrObj.map(function(obj) {
  	return this.headers.map(function(el) {
    	return obj[el];
    });
  },this);
  
  this.addRow = function(arr2) {
  	return this.rows.push(arr2);
  };
  
  this.addRows = function(arr3) {
		return arr3.forEach(function(el) {
    	return this.rows.push(el);
    },this);
  };
  
  this.removeRow = function(num) {
  	return this.rows.splice(num - 1,1);
  };
  
  this.showSize = function() {
    return {
    	rows: this.rows.length,
      columns: this.headers.length
    };
  };
  
  this.sOrt = function(num,str) {
  	if ( arguments.length > 1 && arguments[1] === 'desc' ) {
       return this.rows.sort(function(a,b) {
        return b[num] - a[num];
      });
    } else {
    	 return this.rows.sort(function(a,b) {
        return a[num] - b[num];
      });
    }
  }
  
  this.filterBy = function(columnName) {
   	return this.rows.filter(function(el) {
    	return el[this.headers.indexOf(columnName)] !== undefined;
    }, this);
  }
  
}

var table = new Table(headers, rows);
console.log(table.headers);
console.log(table.rows);
console.log(table.filterBy("mark"));