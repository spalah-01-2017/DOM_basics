/*
 функция-конструктор должна принимать в качестве аргументов массив с заголовками таблицы (["name", "mark", "language"])
 и массив объектов следующего вида:
 [{
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
 }]
 у экземпляра объекта должно быть свойство headers, хранящее в себе массив заголовков таблицы (данные из первого аргумента)
 у экземпляра объекта должно быть свойство rows, хранящее в себе массив массивов (двумерный массив) с данными для таблицы
 из второго аргумента
 Пример:

 var headers = ["name", "mark", "language"];
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
 var table = new Table(headers,data);
 table.headers; //["name", "mark", "language"]
 table.rows; //[[undefined,'JavaScript',8], ['Anna','Ruby',undefined], ['Olga',undefined,5]]
 */
function table(headers, data) {
    this.headers = headers;
    this.rows = [];
    var row = [];
    //this loop is not finished yet:
    this.rows = this.rows.push(data.forEach(
        Object.keys(obj).map(function (key) { 
            row[key] = obj[key]; 
        })
    ));


    /*
     table.addRow(['John', 'PHP', 5]);
     table.rows; //[[undefined,'JavaScript',8], ['Anna','Ruby',undefined], ['Olga',undefined,5], ['John','PHP',5]]
     */
    function addRow(arr) {
        this.rows.push(arr);
    }

    /*
     addRows принимает аргументом двумерный массив (массив массивов) и добавляет эти массивы в свойство rows
     Пример:

     table.addRows([['Mike', 'Go', 3], ['Mila', 'Java', 10]]);
     table.rows; //[[undefined,'JavaScript',8], ['Anna','Ruby',undefined], ['Olga',undefined,5], ['Mike', 'Go', 3], ['Mi
     */
    function addRows(arrInArr) {
        this.rows = this.rows.concat(arrInArr);
    }

}