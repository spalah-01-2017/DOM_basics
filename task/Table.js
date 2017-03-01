var headers = ["name", "mark", "language"];
var data = [{
    name: 'Taras',
    language: 'JavaScript',
    mark: 8
},
{
    name: 'Anna',
    language: 'Ruby',
    mark: 3
},
{
    name: 'Olga',
    language: 'Python',
    mark: 5
}];

function Table (arr,arr2) {
    this.headers = arr;
    this.rows  = arr2.map(function(obj) {
        return this.headers.map((el) => {
            return obj[el];
        });
    }, this);
};

Table.prototype.addRow = function(arr) {
    this.rows.push(arr);
}
Table.prototype.addRows = function(arr) {
    arr.forEach(el => {
        this.rows.push(el); 
    });
}
Table.prototype.removeRow = function(i) {
    this.rows.splice(i, 1);
}
Table.prototype.addColumn = function(...rest) {
    this.headers.push(rest[0]);
    var newRow = this.rows.slice();
    for (var i = 0; i < this.rows.length; i++) {
        newRow[i].push(rest[1][i]);
    }
    this.rows = newRow.slice();
}
Table.prototype.showSize = function() {
    var row = this.rows.length;
    var col = this.headers.length;
    return {
        rows: row,
        column: col
    }
}
Table.prototype.sort = function(num, desc) {
    if (arguments.length === 1) {
        this.rows.sort(function (a, b) {
            if (a[num] > b[num]) {
                return 1;
            } else return -1;
        });
    } else {
        this.rows.sort(function (a, b) {
            if (a[num] < b[num]) {
                return 1;
            } else return -1;
        });
    }
}
Table.prototype.filter = function(category) {
    return this.rows.filter((arr) => {
        return arr[this.headers.indexOf(category)] !== undefined;
    });
};
Table.prototype.getData = function() {
    return this.rows.map((arr) => {
        return this.headers.reduce(function(cur, next, i) {
            cur[next] = (arr[i] || 'is not defined');
            return cur;
        }, {});
    });
}

var table = new Table(headers,data);
