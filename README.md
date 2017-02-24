## Домашнее задание

### Теория

[Пример с занятия](example.js)

[JavaScript и браузер](https://karmazzin.gitbooks.io/eloquentjavascript_ru/content/chapters/chapter12.html)

[Окружение: DOM, BOM и JS](https://learn.javascript.ru/browser-environment)

[Дерево DOM](https://learn.javascript.ru/dom-nodes)

[Работа с DOM из консоли](https://learn.javascript.ru/dom-console)

[Поиск: getElement* и querySelector* и не только](https://learn.javascript.ru/searching-elements-dom)

===
### Практика

####(1) ⭐ Создайте Функция-конструктор Table.

#####1.1 Должны выполняться следующие критерии:

- функция-конструктор должна принимать в качестве аргументов массив с заголовками таблицы (["name", "mark", "language"]) и массив объектов следующего вида: 
```javascript
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
```
- у экземпляра объекта должно быть свойство headers, хранящее в себе массив заголовков таблицы (данные из первого аргумента)
- у экземпляра объекта должно быть свойство rows, хранящее в себе массив массивов (двумерный массив) с данными для таблицы из второго аргумента

Пример:
```javascript
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
```

#####1.2 Экземпляр объекта должен иметь следующие методы:
    
- addRow принимает аргументом массив и добавляет его в свойство rows.

Пример:
```javascript
table.addRow(['John', 'PHP', 5]);
table.rows; //[[undefined,'JavaScript',8], ['Anna','Ruby',undefined], ['Olga',undefined,5], ['John','PHP',5]]
```

- addRows принимает аргументом двумерный массив (массив массивов) и добавляет эти массивы в свойство rows

Пример:
```javascript
table.addRows([['Mike', 'Go', 3], ['Mila', 'Java', 10]]);
table.rows; //[[undefined,'JavaScript',8], ['Anna','Ruby',undefined], ['Olga',undefined,5], ['Mike', 'Go', 3], ['Mila', 'Java', 10]]
```

- метод removeRow принимает в качестве аргумента номер ряда таблицы и удаляет этот ряд

Пример:
```javascript
table.removeRow(0);
table.rows; //[['Anna','Ruby',undefined], ['Olga',undefined,5], ['Mike', 'Go', 3], ['Mila', 'Java', 10]]
table.removeRow(1);
table.rows; //[['Anna','Ruby',undefined], ['Mike', 'Go', 3], ['Mila', 'Java', 10]]
```

- метод addColumn принимает аргументами название колонки и массив с данными и добавляет название колонки в массив headers, а массив данных - в массив rows

Пример:
```javascript
table.addColumn('surname', ['Smith', 'Ivanov', 'Bregovich']);
table.headers; //["name", "mark", "language", "surname"]
table.rows; //[['Anna', 'Ruby', undefined, 'Smith'], ['Mike', 'Go', 3, 'Ivanov'], ['Mila', 'Java', 10, 'Bregovich']]
```

- метод showSize возвращает текущий размер таблицы (количество рядов без учета шапки и столбцы)
            
Пример:
```javascript
table.showSize(); //{rows: 3, columns: 4}
table.removeRow(0);
table.rows; //[['Mike', 'Go', 3, 'Ivanov'], ['Mila', 'Java', 10, 'Bregovich']]
table.showSize();  //{rows: 2, columns: 4}
```

- метод sort принимает номер столбца и сортирует все ряды в порядке возрастания; должен принимать второй необязательный аргумент - строку 'desc' - и в таком случае порядок сортировки должен быть обратным - в порядке убывания

Пример:
```javascript
table.rows; //[['Mike', 'Go', 3, 'Ivanov'], ['Mila', 'Java', 10, 'Bregovich']]
table.sort(3); //сортировка по фамилии
table.rows; //[['Mila', 'Java', 10, 'Bregovich'], ['Mike', 'Go', 3, 'Ivanov']]
table.sort(3,'desc'); //сортировка по фамилии в обратном порядке
table.rows; //[['Mike', 'Go', 3, 'Ivanov'], ['Mila', 'Java', 10, 'Bregovich']]
```

- метод filterBy принимает в качестве аргумента название столбца и возвращает новый массив рядов, отфильтрованный таким образом, чтобы содержались только те ряды, которые имеют какое-либо значение в указанном столбце

Пример:
```javascript
table.addRow(['John', 'PHP', undefined, 'Doe']);
table.rows; //[['Mike', 'Go', 3, 'Ivanov'], ['Mila', 'Java', 10, 'Bregovich'], ['John', 'PHP', undefined, 'Doe']]
table.filterBy('mark'); //[['Mike', 'Go', 3, 'Ivanov'], ['Mila', 'Java', 10, 'Bregovich']] - не показываем Джона, потому что отфильтровали по оценке, которой у него нет (undefined)
table.rows; //[['Mike', 'Go', 3, 'Ivanov'], ['Mila', 'Java', 10, 'Bregovich'], ['John', 'PHP', undefined, 'Doe']] - исходный массив не меняется, все на месте
```

- метод getData возвращает массив объектов такого же вида, в котором данные были получены на входе функции-конструктора. При этом должны учитываться изменения исходной структуры данных.

Пример:
```javascript
table.getData();
// [{
//     name: 'Mike',
//     language: 'Go',
//     mark: 3,
//     surname: 'Ivanov'
// }, {
//     name: 'Mila',
//     language: 'Java',
//     mark: 10,
//     surname: 'Bregovich'
// }, {
//     name: 'John',
//     language: 'PHP',
//     mark: undefined,
//     surname: 'Doe'
// }]
```

Ваша реализация должна работать так же, как представлено в примерах, по ним вы можете протестировать свою работу. Рекомендую тестировать свою реализацию с помощью console.table(). Например: console.table(table.rows) или console.table(table.getData()) - должны выводиться отформатированные таблицы в консоли браузера.

####(2) Верстка. Реализуйте макет (хранится в [папке design](/design)), приведенный в формате psd (Photoshop можно установить и пользоваться бесплатно 30 дней) или png. Для удобства реализации макета в папке images предоставлены уже вырезанные из макета изображения.
Полезные материалы по верстке:

- Как сверстать веб-страницу: https://habrahabr.ru/post/202408/

- Удобный ресурс для тестирования стилей: http://www.cssdesk.com/

- Списки селекторов: http://quirksmode.org/css/selectors/, http://www.w3schools.com/cssref/css_selectors.asp

- Тестирование селекторов: http://www.w3schools.com/cssref/trysel.asp

- Дэвид Макфарланд "Большая книга CSS3" (примеры из книги тут: https://github.com/sawmac/CSS3)

___
⭐ - обязательное задание
