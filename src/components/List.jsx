function List() {
	const colors = ['red', 'green', 'blue'];

	return (
		<ul>
			{colors.map((color, idx) => {
				return (
					<li key={idx} style={{ color: color }}>
						{color}
					</li>
				);
			})}
		</ul>
	);
}

export default List;
