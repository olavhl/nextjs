import React, {useEffect, useState} from "react";
import {useRouter} from "next/router";
import DefaultLayout from "../../layouts/Default";

export default function Cat() {
    const [cat, setCat] = useState()

    const router = useRouter();
    const {id} = router.query;

    const fetchCat = async () => {
        const res = await fetch(`/api/cats/${id}`)
        const data = await res.json()
        setCat(data)
    }

    useEffect(() => {
        fetchCat().then(() => console.log("Cat Fetched"))
    }, [])

    return <DefaultLayout>
        {cat && (
            <div className={"container mt-5"} style={{display: "flex"}}>
                <img src={cat.image.url} alt={cat.image.alt}/>
                <div className={"mx-5"}>
                    <h1>{cat.name}</h1>
                    <p>{cat.description}</p>
                </div>
            </div>
        )}
    </DefaultLayout>
}