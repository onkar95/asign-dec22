import React, { useState } from 'react'
import Axios from 'axios';

const Details = ({ data1 }) => {
    console.log(data1);

    return (
        <>

            <div  >
                <div id="content" style={{ display: "flex", marginTop: "50px", marginLeft: "100px", alignItems: "center", justifyContent: "center" }}>
                    <h1 style={{ marginRight: "10px", width: "20%" }}> name</h1>
                    <h1 style={{ marginRight: "10px", width: "20%" }}> email</h1>
                    <h1 style={{ marginRight: "10px", width: "20%" }}> state</h1>
                    <h1 style={{ marginRight: "10px", width: "20%" }}> city</h1>
                </div>

                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">Sr.no</th>
                            <th scope="col">name</th>
                            <th scope="col">email </th>
                            <th scope="col">state </th>
                            <th scope="col">city</th>
                        </tr>
                    </thead>
                    {data1.map((val, key) => (
                        <>
                            <tbody id={val._id}>
                                <tr>
                                    <th scope="row">{key+1}</th>
                                    <th scope="row">{val.name}</th>
                                    <td>{val.email}</td>
                                    <td>{val.state}</td>
                                    <td>{val.city}</td>
                                </tr>

                            </tbody>
                        </>
                    ))}
                </table>
            </div>

        </>
    )
}

export default Details;
