import React, { useEffect, useState } from "react";

const Categories = () => {
	const [categories, setCategory] = useState([]);
	const [show, setShow] = useState(0)

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

	const subCategories = () => {
		console.log(show)
		if (show) return parent[show].child.map(item => item.name)
	}

	return (
		<div style={{ display: "flex" }}>
			<div>
				{parent.map((item, index) => {
					return (
						<div key={item.id}>
							<h2 onMouseOver={() => setShow(index)}>{item.heading}</h2>
						</div>
					);
				})}
			</div>
			<div>
				{subCategories()}
			</div>
		</div>
	);
};

export default Categories;
