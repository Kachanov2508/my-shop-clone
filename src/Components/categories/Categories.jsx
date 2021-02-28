import React, { useEffect, useState } from "react";

const Categories = () => {
	const [categories, setCategory] = useState([]);
	const [show, setShow] = useState(0);

	useEffect(() => {
		fetch("https://my-shop-a8555-default-rtdb.firebaseio.com/categories.json")
			.then((response) => response.json())
			.then((data) => setCategory(data));
	}, []);

	const getParentCategories = (categories) => {
		return categories.filter(item => !item.parentId);
	}

	const getSubCategories = (categories, parentCategory) => {
		return categories.filter(category => category.parentId === parentCategory.id)
	}

	const parent = getParentCategories(categories)
		.map(item => {
			return {
				heading: item.name,
				child: getSubCategories(categories, item)
					.map(item => {
						return {
							heading: item.name,
							child: getSubCategories(categories, item)
						}
					})
			};
		});


	const subCategories = () => {
		if (parent.length > 0) {
			return parent[show].child.map(item => {
				return (
					<div style={{ marginBottom: "20px", breakInside: "avoid" }}>
						<h3 key={item.id}>{item.heading}</h3>
						{item.child.map(item => <p>{item.name}</p>)}
					</div>
				)
			})
		}
	}

	return (
		<div style={{ display: "grid", gridTemplateColumns: "1fr 2fr" }}>
			<div>
				{parent.map((item, index) => {
					return (
						<div key={item.id}>
							<h2 onMouseOver={() => setShow(index)}>{item.heading}</h2>
						</div>
					);
				})}
			</div>
			<div style={{ columnCount: "3" }}>
				{subCategories()}
			</div>
		</div>
	);
};

export default Categories;
