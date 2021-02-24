import React, { useEffect, useState } from 'react'

const Categories = () => {

    const [categories, setCategory] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/categories')
            .then(response => response.json())
            .then(data => setCategory(data))
    }, [])

    const parent = categories.filter(parent => !parent.parentId).map(item => {
        return (
            {
                heading: item.name,
                child: categories.filter(child => item.id === child.parentId)
            }
        )
    })

    const ppp = categories.filter(item => parent.filter(i => i.id === item.parentId))

    console.log(parent)

    return (
        <div style={{margin:"40px"}}>
            <h1 style={{marginBottom: "40px"}}>Catalogue</h1>
            <ul style={{display:"grid", gridTemplateColumns:"1fr 1fr 1fr"}}>
                {parent.map(item => <li key={item.id}>
                    <h2 style={{margin:"40px 0 10px 0"}}>{item.heading}</h2>
                    <ul>
                        {item.child.map(item => <li>{item.name}</li>)}
                    </ul>
                </li>)}
            </ul>
        </div>
    )
}

export default Categories;