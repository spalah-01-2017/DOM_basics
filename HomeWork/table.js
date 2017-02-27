function Table (headers, arrObj) {
	this.headers = headers;
	this.rows = [];
	arrObj.forEach(function (obj, objInd) {
		this.rows[objInd] = this.headers.map(function (el, ind) {
			return this.rows[objInd] = obj[el];
		}, this)
	}, this)
}

Table.prototype.addRow = function (arr) {
	this.rows.push(arr);
}

Table.prototype.addRows = function (arr) {
	arr.forEach(function (el) {
		this.rows.push(el);
	}, this);
}

Table.prototype.removeRow = function (ind) {
	this.rows.splice(ind, 1);
}

Table.prototype.addColumn = function (header, newRow) {
	this.headers.push(header);
	newRow.forEach(function (el, ind) {
		this.rows[ind].push(el);
	}, this)
}

Table.prototype.showSize = function () {
	return {
		rows: this.rows.length,
		columns: this.headers.length
	};
}

Table.prototype.sort = function (num, desc) {
	if (desc !== 'desc') {
		this.rows.sort(function (a, b) {
			if (a[num] > b[num] || a[num] === undefined) {
	    		return 1;
	  		} 
	  		if (a[num] < b[num]) {
	   	 		return -1;
	  		}
	  		return 0;
		})
	} else {
		this.rows.sort(function (a, b) {
			if (a[num] > b[num]) {
	    		return -1;
	  		} 
	  		if (a[num] < b[num] || a[num] === undefined) {
	    		return 1;
	  		}
	  		return 0;
		})
	}
}

Table.prototype.filterBy = function (header) {
	return this.rows.filter(function (arr) {
		return arr[this.headers.indexOf(header)] !== undefined;
	}, this);
}

Table.prototype.getData = function () {
	return this.rows.map(function (el) {
		return this.headers.reduce(function (obj, next, ind) {
			obj[next] = el[ind];
			return obj;
		}, {})
	}, this);
}

// var headers = ["name", "language", "mark"];
// var data = [{
//                 language: 'JavaScript',
//                 mark: 8
//             },
//             {
//                 name: 'Anna',
//                 language: 'Ruby'
//             },
//             {
//                 name: 'Olga',
//                 mark: 5
//             }];
// let table = new Table(headers, data);
// table.addRow(['John', 'PHP', 5]);
// table.addRows([['Mike', 'Go', 3], ['Mila', 'Java', 10]]);
// table.addColumn('surname', ['Smith', 'Ivanov', 'Bregovich']);
// table.sort(2, 'desc');
// console.log(table.getData());
