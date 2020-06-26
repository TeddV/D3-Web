function get() {
    const url = "https://jsonplaceholder.typicode.com/comments"
        
    fetch(url)
    .then((resp) => resp.json())
    .then(function(data) {
        console.log("data", data);      
    })
    .catch(function(error) {
      console.log(error);
    });
}
;

var render = function (template, selector) {
	var node = document.querySelector(selector);
	if (!node) return;
	node.innerHTML = template;
};

var template = '<h1>Hello world!</h1>';
render(template, '#main');
get() 