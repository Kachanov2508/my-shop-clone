import React, { useEffect, useState } from "react";

const Categories = async () => {
	const [categories, setCategory] = useState([]);
	const [show, setShow] = useState(0)

	useEffect(() => {
		fetch("https://my-shop-a8555-default-rtdb.firebaseio.com/categories.json")
			.then((response) => response.json())
			.then((data) => setCategory(data));
	}, []);

	const parent = categories
		.filter((parent) => !parent.parentId)
		.map((item) => {
			return {
				heading: item.name,
				child: categories.filter((child) => item.id === child.parentId)
			};
		});

	const subCategories = () => {
		if (show) return parent[show].child.map(item => <div>{item.name}</div>)
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
