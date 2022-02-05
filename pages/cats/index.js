import React from "react";
import {Nav} from "../../components/Nav/Nav";
import {Card} from "../../components/Card/Card";

export default function index() {
    return <>
        <Nav />
        <h1>Catss</h1>
        <Card email={"ola@nordmann.no"} id={1} image={""} name={"Ola"} phone={"91813339"} />
    </>

}