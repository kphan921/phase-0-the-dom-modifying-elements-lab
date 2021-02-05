var element = document.getElementsByTagName('main');
element[0].remove();

const newHeader = document.createElement('h1');
document.body.appendChild(newHeader);

newHeader.id= 'victory';

var headerText = document.createTextNode('Kai is the champion');

newHeader.appendChild(headerText);