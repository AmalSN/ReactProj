import React from 'react'
import './Signup.css'

export default function Signup() {
  return (
   <div>
       <div class="modal" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Username already exists</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <p>Choose another name
                        </p>
                    </div>
                </div>
            </div>
        </div>

        <div class="container overflow-hidden">
                    <div class="row gx-5">
                        <div class="col">
                            <form action="/join-us/login" method="POST">
                                <div class="p-5 border bg-light">
                                    <h1 class="h3 mb-3 fw-normal">Sign-Up Here</h1>
                                    <div class="row">
                                        <div class="col">
                                            <input type="text" class="form-control" placeholder="First name"
                                                aria-label="First name" name="fName" id="fName" required
                                                onblur="check()"/>
                                        </div>
                                        <div class="col">
                                            <input type="text" class="form-control" placeholder="Last name"
                                                aria-label="Last name" name="lName" id="lName" required
                                                onblur="check()"/>
                                        </div>
                                    </div><br/>

                                    <div class="row">
                                        <div class="col">
                                            <select id="gender" class="form-select" name="gender"
                                                placeholder="Gender" onblur="check()">
                                                <option value="M">Male</option>
                                                <option value="F">Female</option>
                                                <option value="O">Other</option>
                                            </select>
                                        </div>
                                        <br/>

                                        <div class="col">

                                            <input type="number" class="form-control" id="age" placeholder="Age"
                                                name="age" onblur="check()"/>
                                        </div>

                                    </div><br/>

                                    <div class="col">
                                        <input type="username" class="form-control" id="uName" placeholder="Username"
                                            size="30" name="uName" required onblur="check()"/>
                                    </div><br/>
                                    <div class="col">
                                        <input type="email" class="form-control" id="email" placeholder="Email"
                                            size="30" name="email" required onblur="check()"/>
                                    </div><br/>
                                    <div class="col">
                                        <input type="password" class="form-control" id="password" placeholder="Password"
                                            name="password" required onblur="check()"/>
                                        <br/>
                                        <input type="password" class="form-control" id="passwordConfirm"
                                            placeholder="Confirm-Password" name="passwordConfirm" required
                                            onblur="check()"/>
                                        <br/>
                                    </div>
                                    <button class="col-md-12 text-center btn btn-outline-success" type="submit"
                                        id="signup-button">SignUp</button>

                                </div>


                            </form>
                        </div>
                        <div class="col">
                            <div id="ctr">
                                <div class="p-3 border bg-Dark">
                                    <div id="carouselExampleFade" class="carousel slide carousel-fade"
                                        data-bs-ride="carousel">
                                        <div class="carousel-inner">
                                            <div class="carousel-item active">
                                                <img src="../../public/ludo.avif" class="d-block w-100" alt="..."/>
                                            </div>
                                            <div class="carousel-item">
                                                <img src="../../public/snake and ladder.jpg" class="d-block w-100" alt="..."/>
                                            </div>
                                            <div class="carousel-item">
                                                <img src="../../public/tic.jpg" class="d-block w-100" alt="..."/>
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
