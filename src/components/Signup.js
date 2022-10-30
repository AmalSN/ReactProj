import React from 'react'
import sgpg from './Signup.module.css'

export default function Signup() {
  return (
   <div className={sgpg.bgimage}>
       <div className="modal" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Username already exists</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <p>Choose another name
                        </p>
                    </div>
                </div>
            </div>
        </div>

        <div className={`container ${sgpg.sgpgcontainer} overflow-hidden`}>
                    <div className="row gx-5">
                        <div className="col">
                            <form action="/join-us/login" method="POST">
                                <div className="p-5 border bg-light">
                                    <h1 className={`${sgpg.sgpgh3} mb-3 fw-normal`}>Sign-Up Here</h1>
                                    <div className="row">
                                        <div className="col">
                                            <input type="text" className="form-control" placeholder="First name"
                                                aria-label="First name" name="fName" id="fName" required
                                                onblur="check()"/>
                                        </div>
                                        <div className="col">
                                            <input type="text" className="form-control" placeholder="Last name"
                                                aria-label="Last name" name="lName" id="lName" required
                                                onblur="check()"/>
                                        </div>
                                    </div><br/>

                                    <div className="row">
                                        <div className="col">
                                            <select id="gender" className="form-select" name="gender"
                                                placeholder="Gender" onblur="check()">
                                                <option value="M">Male</option>
                                                <option value="F">Female</option>
                                                <option value="O">Other</option>
                                            </select>
                                        </div>
                                        <br/>

                                        <div className="col">

                                            <input type="number" className="form-control" id="age" placeholder="Age"
                                                name="age" onblur="check()"/>
                                        </div>

                                    </div><br/>

                                    <div className="col">
                                        <input type="username" className="form-control" id="uName" placeholder="Username"
                                            size="30" name="uName" required onblur="check()"/>
                                    </div><br/>
                                    <div className="col">
                                        <input type="email" className="form-control" id="email" placeholder="Email"
                                            size="30" name="email" required onblur="check()"/>
                                    </div><br/>
                                    <div className="col">
                                        <input type="password" className="form-control" id="password" placeholder="Password"
                                            name="password" required onblur="check()"/>
                                        <br/>
                                        <input type="password" className="form-control" id="passwordConfirm"
                                            placeholder="Confirm-Password" name="passwordConfirm" required
                                            onblur="check()"/>
                                        <br/>
                                    </div>
                                    <button className="col-md-12 text-center btn btn-outline-success" type="submit"
                                        id="signup-button">SignUp</button>

                                </div>


                            </form>
                        </div>
                        <div className="col">
                            <div id={sgpg.ctr}>
                                <div className="p-3 border bg-Dark">
                                    <div id="carouselExampleFade" className="carousel slide carousel-fade"
                                        data-bs-ride="carousel">
                                        <div className="carousel-inner">
                                            <div className="carousel-item active">
                                                <img src="/ludo.avif" className="d-block w-100" alt="..."/>
                                            </div>
                                            <div className="carousel-item">
                                                <img src="/snake and ladder.jpg" className="d-block w-100" alt="..."/>
                                            </div>
                                            <div className="carousel-item">
                                                <img src="/tic.jpg" className="d-block w-100" alt="..."/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                </div>
  )
}
