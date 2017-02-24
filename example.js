document.getElementById('id-name') //returns node

document.getElementsByClassName('class-name') //returns nodeList

document.getElementsByName('name') //returns nodeList

document.getElementsByTagName('div') //returns nodeList

document.querySelector('div.class-name') //returns node

document.querySelectorAll('div.class-name > p') //returns nodeList


function getElements() {
    return [].reduce.call(arguments, function(elementsObj, idStr) {
        return elementsObj[idStr] = document.getElementById(idStr), elementsObj;
    }, {});
}

// const getElements = (...args) => args.reduce((elementsObj, idStr) => {
// 	elementsObj[idStr] = document.getElementById(idStr);
// 	return elementsObj;
// }, {});

function getElementsLoop() {
    var obj = {};
    for(var i = 0; i < arguments.length; i += 1) {
        obj[arguments[i]] = document.getElementById(arguments[i]);
    }
    return obj;
}
