window.onload = function(e) {
	fetch(
		'https://jsonplaceholder.typicode.com/comments', {		
		}).then(response => response.json())				
	.then(data => { 
		console.log(data);
		data.forEach(post => {  
			var table = document.getElementById("tabeladedados");
            var row = table.insertRow(-1);            
			var idPostColuna = row.insertCell(0);
			var nameColuna = row.insertCell(1); 
			var emailColuna = row.insertCell(2); 
			var bodyColuna = row.insertCell(3); 
			idPostColuna.innerHTML = post.postId;
			nameColuna.innerHTML = post.name;
			emailColuna.innerHTML = post.email;
			bodyColuna.innerHTML = post.body;
		})
	}).catch(error => console.error(error))
}

function adicionarPessoa(){
	document.getElementById('formPessoa').style.display="block"
}

function enviarForm() {
	var form = document.getElementById('adicionarPessoa');
	var data = {};
	data['nome'] = form.nome.value 
	data['idade'] = form.idade.value;
	data['altura'] = form.altura.value;
	data['peso'] = form.peso.value; 
	data['sexo'] = form.sexo.value;
	fetch('http://localhost:8080/AulaBanco/pessoas', {
		method: 'POST',       
		body: JSON.stringify(data)
	})
	.then((response) => {
		if (response.ok) {
			return response.json() 
		} else {
			return Promise.reject({ status: res.status, statusText: res.statusText });
		}   

	})
	.then((data) => console.log(data))
	.catch(err => console.log('Error message:', err.statusText));
}