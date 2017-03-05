"use strict";

/**
 * Created by Дмитрий on 02.03.2017.
 */
function Table(headers, rows) {
    this.headers = headers;
    this.rows = new Array();
    for (var i = 0; i < this.headers.length; i++) {
        this.rows[i] = new Array();
        for (var j = 0; j < rows.length; j++) {
            var neme = this.headers[j];
            this.rows[i][j] = rows[i][neme];
        }
    }
}

Table.prototype.addRow = function (row) {
    var row = row || [];
    this.rows.push(row);
};
Table.prototype.addRows = function (rows) {
    var rows = rows || [];
    rows.forEach(function (element) {
        this.addRow(element);
    }, this);
};
Table.prototype.removeRow = function (row) {
    this.rows.splice(row, 1);
};
Table.prototype.addColumn = function (title, data) {
    this.headers.push(title);
    this.rows.forEach(function (row, i, arr) {
        arr[i].push(data[i]);
    });
};
Table.prototype.showSize = function () {
    return {
        rows: this.rows.length,
        columns: this.rows[0].length
    };
};
Table.prototype.sort = function (column, desc) {
    var column = column || false;
    var desc = desc == 'desc' || false;
    column = column - 1;
    this.rows.sort(sortColumn);
    function sortColumn(a, b) {
        if (desc) {
            return a[column] < b[column];
        } else {
            return a[column] > b[column];
        }
    }
};
Table.prototype.filterBy = function (columnTitle) {
    var columnNum = this.headers.indexOf(columnTitle);
    return this.rows.filter(function (element) {
        return element[columnNum] != undefined;
    });
    /* return this.rows.reduce(function(arr, el){
        if(el[columnNum] != undefined){
            arr.push(el);
        }
        return arr;
    }, []);*/
};
Table.prototype.getData = function () {
    var titles = this.headers;
    return this.rows.reduce(function (arr, el) {
        var item = {};
        var marker = false;
        for (var i = 0; i < el.length; i++) {
            if (el[i] != undefined) {
                item[titles[i]] = el[i];
                marker = true;
            }
        }
        if (marker) arr.push(item);
        return arr;
    }, []);
};

var headers = ["name", "language", "mark"];
var data = [{
    language: 'JavaScript',
    mark: 8
}, {
    name: 'Anna',
    language: 'Ruby'
}, {
    name: 'Olga',
    mark: 5
}];

var table = new Table(headers, data);

// console.log(table.headers);
// table.addRow(['John', 'PHP', 5]);
// table.addRows([['Mike', 'Go', 3], ['Mila', 'Java', 10]]);
// table.removeRow(1);
// console.table(table.rows);
// table.addColumn('surname', ['Smith', 'Ivanov', 'Bregovich']);
// console.log(table.headers);
// console.table(table.rows);
// console.log(table.showSize());
// table.removeRow(0);
// console.log(table.showSize());
// console.table(table.rows);
// table.sort(1, 'desc');
// console.table(table.rows);
// console.table(table.filterBy('mark'));
// console.table(table.getData());
//# sourceMappingURL=script.js.map