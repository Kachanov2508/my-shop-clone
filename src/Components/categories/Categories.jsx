import React, { useEffect, useState } from "react";

const Categories = () => {
	const [categories, setCategory] = useState([]);

	useEffect(() => {
		fetch("http://localhost:3000/categories")
			.then((response) => response.json())
			.then((data) => setCategory(data));
	}, []);

	const parent = categories
		.filter((parent) => !parent.parentId)
		.map((item) => {
			return {
				heading: item.name,
				child: categories.filter((child) => item.id === child.parentId),
			};
		});

	const ppp = categories.filter((item) =>
		parent.filter((i) => i.id === item.parentId)
	);

	console.log(parent);

	return (
		<div style={{ margin: "40px" }}>
			<ul>
				{parent.map((item) => {
					return (
						<li key={item.id}>
							<h2>{item.heading}</h2>
							<ul>
								{item.child.map((item) => (
									<li>{item.name}</li>
								))}
							</ul>
						</li>
					);
				})}
			</ul>
		</div>
	);
};

export default Categories;
