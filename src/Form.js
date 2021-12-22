import React, { useState, useContext, useEffect } from "react";
import { Redirect } from "react-router-dom";
import Details from "./Details";
import Axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';


const Form = (props) => {
    const [ data, setData ] = useState([]);
    console.log(props.data1);
    
    const [val, setTrue] = useState("false")
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [state, setState] = useState('')
    const [city, setCity] = useState('')
    // const [password, setPassword] = useState('')
    const [nameError, setNameError] = useState('')
    const [emailError, setEmailError] = useState('')
    // // const [passwordError, setPasswordError] = useState('')

    useEffect(() => {
        Axios.get("http://localhost:5000/user")
          .then(res => {
            setData(res.data)
            console.log(res.data)
          })
          .catch(err => console.log(err));
    
      },[val])
    const submitHandler = async e => {
        e.preventDefault();
        setTrue("true")
        setEmailError('');
        setNameError('');
        // setPasswordError('');
        console.log(name, email)
        try {
            // const res = await fetch('https://onkar-auth-demo.herokuapp.com/signup', {
            const res = await fetch('http://localhost:5000/signupUser', {
                method: 'POST',
                credentials: 'include',
                body: JSON.stringify({ name, email,state,city }),
                headers: { 'Content-Type': 'application/json' }
            });
            const data = await res.json();
            console.log(data.user)
            // console.log(data.errors)
            if (data.errors) {
                setEmailError(data.errors.email);
                setNameError(data.errors.name);
                // setPasswordError(data.errors.password);

            }
            setData(...data,data.user)
            
        } catch (error) {
            console.log(error)
        }
    }

   
    return (
        <>
             {/* <Navbar />  */}

            <div className="row">
                <div className="col-sm-2" />
                <div className="col-sm-8">
                    {/* <h4 className="text-muted text-center mb-5">Create account as Tutor</h4> */}

                    <div className="card p-5 shadow">

                        <form onSubmit={submitHandler}>
                            <h2>Sample form</h2>
                            <div className="form-group">
                                <label htmlFor="name">Name :</label>
                                <input id="name" type="name" className="form-control"
                                    value={name}
                                    onChange={e => setName(e.target.value)}
                                />
                                <div className="alert-danger">{nameError}</div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email :</label>
                                <input id="email" type="email" className="form-control"
                                    value={email}
                                    onChange={e => setEmail(e.target.value)}
                                />
                                <div className="alert-danger">{emailError}</div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">State :</label>
                                <input id="password" type="text" className="form-control"
                                    value={state}
                                    onChange={e => setState(e.target.value)}
                                />
                                {/* <div className='alert-danger'>{StateError}</div> */}
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">City :</label>
                                <input id="password" type="text" className="form-control"
                                    value={city}
                                    onChange={e => setCity(e.target.value)}
                                />
                                {/* <div className='alert-danger'>{CityError}</div> */}
                            </div>

                            <button className="btn btn-primary ">Submit</button>

                        </form>

                    </div>
                </div>
                <Details data1={props.data1}/>
               
                <div className="col-sm-2" />
            </div>
        </>
    );
};

export default Form;
