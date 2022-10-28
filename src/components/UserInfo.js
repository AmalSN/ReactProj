import React from 'react'
// import './UserInfo.css'
export default function UserInfo() {
  return (
    
      <body>

{/* <% if(check==1) { %> */}
    <div className="modal" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
            <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">Password Wrong!!</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                    <p>Try again
                    </p>
                </div>
            </div>
        </div>
    </div>
    {/* <% } %> */}

        {/* <%- include('partial/navbar', {active: "" }); %> */}
            <div className="container"/>
                <div className="row justify-content-center"/>
                    <div className="col-12 col-lg-10 col-xl-8 mx-auto"/>
                        <h2 className="h3 mb-4 page-title">Settings</h2>
                        <div className="my-4"/>
                            <ul className="nav nav-tabs mb-4" id="myTab" role="tablist">
                                <li className="nav-item">
                                    <a className="nav-link active" id="home-tab" data-toggle="tab" href="#home"
                                        role="tab" aria-controls="home" aria-selected="false">Profile</a>
                                </li>
                            </ul>
                            <div className="row mt-5 align-items-center">
                                <div className="col-md-3 text-center mb-5">
                                    <div className="avatar avatar-xl">
                                        {/* <!-- insert image here --> */}
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="row align-items-center">
                                        <div className="col-md-7">
                                            <h4 className="mb-1">
                                                {/* <%= fName %> */}
                                                    {/* <%= lName %> */}
                                            </h4>

                                        </div>
                                    </div>
                                    <div className="row mb-4">
                                        <div className="col-md-7">
                                            <p className="text-muted">
                                                USERNAME OF THE PLAYER: 
                                            </p>
                                        </div>
                                        <div className="col">
                                            <p className="small mb-0 text-muted"></p>
                                            <p className="small mb-0 text-muted"></p>
                                            <p className="small mb-0 text-muted"></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <hr className="my-4" />
                            <form action="/join-us/userValidation" method="POST">
                                <div className="form-row">
                                    <div className="form-group col-md-6">
                                        <label for="firstname">Firstname</label>
                                        <input type="text" id="firstname" className="form-control" name="fName"
                                            placeholder="<%= fName %>" onblur="check()" />
                                    </div>
                                    <div className="form-group col-md-6">
                                        <label for="lastname">Lastname</label>
                                        <input type="text" id="lastname" className="form-control" name="lName"
                                            placeholder="<%= lName %>" onblur="check()" />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label for="inputEmail4">Email</label>
                                    <input type="email" className="form-control" id="inputEmail4" name="email"
                                        placeholder="<%= email %>" onblur="check()" />
                                </div>
                                <hr className="my-4" />
                                <div className="row mb-4">
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label for="inputPassword4">Old Password</label>
                                            <input type="password" className="form-control" id="oldPassword"
                                                name="oldPassword" required onblur="check()" />
                                        </div>
                                        <div className="form-group">
                                            <label for="inputPassword5">New Password</label>
                                            <input type="password" className="form-control" id="password"
                                                name="password" onblur="check()" />
                                        </div>
                                        <div className="form-group">
                                            <label for="inputPassword6">Confirm Password</label>
                                            <input type="password" className="form-control" id="confirmPassword"
                                                name="confirmPassword" onblur="check()" />
                                        </div>
                                    </div>
                                    <div className="container">
                                        <button type="submit" id="submit" className="btn btn-primary">Submit</button>
                                    </div>
                                </div>
                            </form>
</body>
   
  )
}
