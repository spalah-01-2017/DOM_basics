function Table(headers, objArr) {
    this.headers = headers;
    this.rows = [];
    objArr.forEach(function(obj, objI) {
        this.rows[objI] = headers.map(function(el, i) {
            return this.rows[objI] = obj[el]
        }, this)
    }, this)
}

Table.prototype.addRow = function(arr) {
    this.rows.push(arr);
}

Table.prototype.addRows = function(arr) {
    arr.forEach(function(i) {
        this.rows.push(i);
    }, this);
}

Table.prototype.removeRow = function(i) {
    this.rows.splice(i, 1);
}

Table.prototype.addColumn = function(colName, colData) {
    this.headers.push(colName);
    colData.forEach(function(el, i) {
        this.rows[i].push(el);
    }, this)
}

Table.prototype.showSize = function() {
    return {
        rows: this.rows.length,
        columns: this.headers.length
    };
}