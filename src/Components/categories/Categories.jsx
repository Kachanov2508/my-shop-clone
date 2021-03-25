import React, { useContext, useEffect, useState } from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWaveSquare, faPercent, faTimesCircle } from '@fortawesome/free-solid-svg-icons'
import { faStar } from '@fortawesome/free-regular-svg-icons';

import cls from './Categories.module.css'

import {CategoriesContext} from '../../context';
import IsFetching from "../isFetching/IsFetching";

const Categories = () => {
	const [categories, setCategories] = useState([]);
	const [show, setShow] = useState(0);
	const [fetching, setFetching] = useState(true);

	const [showCategories, setShowCategories] = useContext(CategoriesContext);

	useEffect(() => {
		setFetching(true);
		setTimeout(() => {
			fetch("https://my-shop-a8555-default-rtdb.firebaseio.com/categories.json")
				.then((response) => response.json())
				.then((data) => setCategories(data));
			setFetching(false);
		}, 1000)
	}, []);

	const parent = categories.filter(item => !item.parentId)
		.map(item => {
			return {
				heading: item.name,
				child: categories.filter(category => category.parentId === item.id)
					.map(item => {
						return {
							heading: item.name,
							child: categories.filter(category => category.parentId === item.id)
						}
					})
			};
		});

	const subCategories = () => {
		if (parent.length > 0) {
			return parent[show].child.map((item, index) => {
				return (
					<div className={cls.group} key={index}>
						<h3>{item.heading}</h3>
						{item.child.map(item => <p key={item.name}>{item.name}</p>)}
					</div>
				)
			})
		}
	}

	const hoverTitle = (index) => {
		setShow(index);
		const titles = Array.from(document.getElementsByClassName(cls.title));

		// Удалить класс activ у всех элементов
		titles.forEach(item => item.classList.remove(cls.active));

		// Добавить класс activ при навдении
		titles[index].classList.add(cls.active);
	}

	return (
		<>
			<div className={cls.bcg} onClick={() => setShowCategories(false)}></div>
			<div className={cls.box}>
				<div className={cls.right}>
					<IsFetching fetching={fetching} />
					{parent.map((item, index) => {
						return (<p onMouseOver={() => hoverTitle(index)} key={index} className={cls.title}>
							{item.heading}
						</p>)
					}
					)}
				</div>
				<div className={cls.left}>
					<div className={cls.header}>
						<div className={cls.headerLeft}>
							<div>
								<FontAwesomeIcon icon={faPercent} />
								<p>Акции в разделе</p>
							</div>
							<div>
								<FontAwesomeIcon icon={faWaveSquare} />
								<p>Гид по разделу</p>
							</div>
							<div>
								<FontAwesomeIcon icon={faStar} />
								<p>Популярные бренды</p>
							</div>
						</div>
						<div className={cls.headerRight} onClick={() => setShowCategories(false)}>
							<FontAwesomeIcon icon={faTimesCircle} />
						</div>
					</div>
					<div className={cls.body}>
						<IsFetching fetching={fetching} />
						<div>
							{subCategories()}
						</div>
					</div>
				</div>
			</div>
		</>

	);
};

export default Categories;
