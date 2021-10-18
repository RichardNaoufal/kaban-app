import React from 'react';
import {render} from 'react-dom';

import KanbanBoard from './KanbanBoard';

let cardsList = [
	{
		id: 1,
		title: "doing the lab",
		description: "why not",
		color: '#BD8D31',
		status: "in-progress",
		tasks: [],
		comment:"comment 1"
	},
	{
		id: 4,
		title: "skin the cat",
		description: "poor thing",
		color: 'back',
		status: "noway",
		tasks: [],
		comment:"comment 4"
	},
	{
		id: 2,
		title: "Write some code",
		description: "coding is nice",
		color: '#3A7E28',
		status: "todo",
		tasks: [
			{
				id: 1,
				name: "ContactList Example",
				done: true
			},
			{
				id: 2,
				name: "Kanban Example",
				done: false
			},
			{
				id: 3,
				name: "My own experiments",
				done: false
			}
		],
		comment:"comment 2"
	},
	{
		id: 3,
		title: "get a hair cut",
		description: "because I am worth it",
		color: 'red ',
		status: "todo",
		tasks: [],
		comment:"comment 3"
	}
];

render(<KanbanBoard cards={cardsList} />, document.getElementById('root'));