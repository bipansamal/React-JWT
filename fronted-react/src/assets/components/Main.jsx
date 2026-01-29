import React from "react";
import Button from "./Button";

const Main = () =>{
    return (
      <>
        <div className="container">
            <div className="p-5 text-center bg-light-dark rounded">
                <h1 className="text-light">Stock Prditction Portal</h1>
                <p className="text-light lead">This stock predition Curious which components explicitly require our JavaScript and Popper? Click the show components link below. If you’re at all unsure about the general page structure, keep reading for an example page template.</p>
                <Button className="btn btn-info" url="/dashboard">Explore Now</Button>

            </div>
        </div>
      </>
    )
}

export default Main;