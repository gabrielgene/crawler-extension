var selectors = [];

var enviar = function() {
  console.log(selectors);
};

window.addEventListener('load', () => {
  var div = document.createElement('div');
  div.style.color = 'black';
  div.style.padding = '20px';
  div.style.position = 'fixed';
  div.style.zIndex = '999999';
  div.style.border = '2px solid black';
  div.style.right = '40px';
  div.style.top = '40px';
  div.style.width = '350px';
  div.style.background = 'white';

  var ul = '<ul id="list"></ul>';

  var button = document.createElement('button');
  button.innerHTML = "Enviar";
  button.onclick = enviar;

  div.innerHTML += ul;

  div.appendChild(button);

  document.body.appendChild(div);

  document.body.addEventListener('click', (e) => {
    var selector = OptimalSelect.select(e.target);
    var ul = document.getElementById("list");
    ul.innerHTML += '<li>' + selector + '</li>';
    array.push(selector);
  });
});
