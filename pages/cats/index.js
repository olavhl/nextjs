import React, {useEffect, useState} from "react";
import {Card} from "../../components/Card/Card";
import DefaultLayout from "../../layouts/Default";

export default function Index() {
    const [cats, setCats] = useState([])

    const fetchCats = async () => {
        const res = await fetch("/api/cats")
        const data = await res.json()
        console.log(data)
        setCats(data)
    }

    useEffect(() => {
        fetchCats().then(() => console.log("Cats fetched"))
    }, [])

    return <DefaultLayout>
        <div className={'container mt-5'}>
            <div style={{display: 'flex', flexWrap: 'wrap'}}>

            {cats.map(cat => <Card key={cat.id} email={cat.email} id={cat.id} phone={cat.phone} name={cat.name} image={cat.image} /> )}
            </div>
        </div>

    </DefaultLayout>

}