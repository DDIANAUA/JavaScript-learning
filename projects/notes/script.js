"use strict";

const inputElement = document.getElementById('toDoList__input');
const createButtonElement = document.getElementById('toDoList__create-button');
const listElement = document.getElementById('toDoList__list');

const notes = [
	{
		title: "note 1", 
		completed: false,
	}, 
	{
		title: "note 2", 
		completed: true,
	},
];

function render() {
	listElement.innerHTML = '';
	if(notes.length === 0){
		listElement.innerHTML = '<p class="list__empty-list">No notes</p>'
	}
	for (let i = 0; i < notes.length; i++) {
		listElement.insertAdjacentHTML('beforeend', getNoteTemplate(notes[i], i))
	}
}

render();

createButtonElement.onclick = function(){
	if(inputElement.value.length === 0){
		return;
	}
	const newNote = {
		title: inputElement.value,
		completed: false,
	};
	notes.push(newNote);
	render();
	inputElement.value = '';
}

listElement.onclick = function (event) {
	if(event.target.dataset.index){
		const index = parseInt(event.target.dataset.index);
		const type = event.target.dataset.type;

		if(type === 'toggle'){
			notes[index].completed = !notes[index].completed;
		} else if(type === 'remove'){
			notes.splice(index, 1);
		}
		render();
	}
}

function getNoteTemplate(note, index) { 
	return `<li class="list__item">
			<div class="list__name ${note.completed ? 'completed' : ''}">${note.title}</div>
			<div class="list__buttons-field">
				<button type="button" class="list__button--green ${note.completed ? 'list__button--green__completed' : ''}" data-index="${index}" data-type="toggle">
					&check;
				</button>
				<button type="button" class="list__button--red" data-index="${index}" data-type="remove">
					&times;
				</button>
			</div>
		</li>`;
}