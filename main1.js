//! Two-way binding

const courses = [
  {
    id: 1,
    name: 'HTML, CSS'
  },
  {
    id: 2,
    name: 'JavaScript'
  },
  {
    id: 3,
    name: 'ReactJS'
  }
];

  //* radio checked

function App() {
	const [checked, setChecked] = useState();

	console.log(checked);

	const handleSubmit = () => {
	console.log({id: checked})
	}

	return (
	<div style={{padding: 30}}>
		{courses.map(course => (
		 <div key={course.id}>
			  <input
			   type="radio"
			   onChange={() => setChecked(course.id)}
			   checked={course.id === checked}
			  />
			   {course.name}
		</div>
		))}
		<button onClick={handleSubmit}>Submit</button>
	</div>
	)
}


//* checkbox checked

function App() {
	const [checked, setChecked] = useState([]);

	const handleCheck = (id) => {
	setChecked(prev => {
		const isChecked = checked.includes(id);
		if(isChecked) {
			return checked.filter(item => item !== id);
		}else {
			return [
	  			...prev,
	  			id
			]
		}
		})
	}

	const handleSubmit = () => {
		console.log({id: checked})
	}

	return (
		<div style={{padding: 30}}>
			{courses.map(course => (
				<div key={course.id}>
					<input
						type="checkbox"
						onChange={() => handleCheck(course.id)}
						checked={checked.includes(course.id)}
					/>
					{course.name}
				</div>
			))}
			<button onClick={handleSubmit}>Submit</button>
		</div>
	)
}
