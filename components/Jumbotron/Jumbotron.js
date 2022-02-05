import React from "react";

export const Jumbotron = () => {
    return (
        <div className="jumbotron jumbotron-fluid">
            <div className="container">
                <h1 className="display-4">Cats World</h1>
                <p className="lead">Find yor best friend today. Adopt a wonder cat.</p>
                <button type="button" className="btn btn-primary">Start Looking</button>
            </div>
        </div>
    )
}