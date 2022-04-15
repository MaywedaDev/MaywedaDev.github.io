var input = document.querySelector('input');
var add = document.getElementById('add');
var tasks = document.getElementById('tasks');

console.log(input.value);

add.addEventListener('click',() =>{
		if (input.value == '' || input.value == "Please enter a Task!") {
			input.value = "Please enter a Task!";
		}

		else{
		var li = document.createElement('li');
		li.className = 'task';

		var content = document.createElement('div');
		content.className = 'content'

		var done = document.createElement('button');
		done.className = 'done';

		var check = document.createElement('i');
		check.className = 'fa-solid fa-check';

		var deleteBtn = document.createElement('button');
		deleteBtn.className = 'delete';

		var trash = document.createElement('i');
		trash.className = 'fa-solid fa-trash';

		content.innerHTML = input.value;
		deleteBtn.appendChild(trash);
		done.appendChild(check);

		li.appendChild(content);
		li.appendChild(done);
		li.appendChild(deleteBtn);

		tasks.appendChild(li);

		input.value = "";
		}

	

	const task = document.querySelectorAll('.task');
	const remove_task = document.querySelectorAll('.delete');

	 function remove(i) {
	 	
		tasks.removeChild(task[i]);
	 }

	 for(let j=0; j<remove_task.length; j++){
	 	remove_task[j].addEventListener('click',() => {
	 		remove(j);
	 	})
	 }
	 console.log(remove_task.length); 

	 const mark_task = document.querySelectorAll('.done');
	 const item = document.querySelectorAll('.content');


	 function stroke(b){
	 	item[b].classList.toggle('line');
	 }

	 for( let k=0; k < mark_task.length; k++){
	 	mark_task[k].addEventListener('click',() => {
	 		stroke(k);
	 	})
	 }

 	console.log(item.length);

 	document.querySelector('.count').innerHTML = `You have created ${item.length} tasks`

});

 

