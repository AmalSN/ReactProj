import React from 'react'
// import './Contact.css'
import $ from 'jquery';
export default function Contact() {

    
    $(function() {
    
        'use strict';
    
        // Form
    
        var contactForm = function() {
    
            if ($('#contactForm').length > 0 ) {
                $( "#contactForm" ).validate( {
                    rules: {
                        name: "required",
                        email: {
                            required: true,
                            email: true
                        },
                        message: {
                            required: true,
                            minlength: 5
                        }
                    },
                    messages: {
                        name: "Please enter your name",
                        email: "Please enter a valid email address",
                        message: "Please enter a message"
                    },
                    /* submit via ajax */
                    submitHandler: function(form) {		
                        var $submit = $('.submitting'),
                            waitText = 'Submitting...';
    
                        $.ajax({   	
                          type: "POST",
                          url: "php/send-email.php",
                          data: $(form).serialize(),
    
                          beforeSend: function() { 
                              $submit.css('display', 'block').text(waitText);
                          },
                          success: function(msg) {
                           if (msg == 'OK') {
                               $('#form-message-warning').hide();
                                setTimeout(function(){
                                   $('#contactForm').fadeOut();
                               }, 1000);
                                setTimeout(function(){
                                   $('#form-message-success').fadeIn();   
                               }, 1400);
                               
                            } else {
                               $('#form-message-warning').html(msg);
                                $('#form-message-warning').fadeIn();
                                $submit.css('display', 'none');
                            }
                          },
                          error: function() {
                              $('#form-message-warning').html("Something went wrong. Please try again.");
                             $('#form-message-warning').fadeIn();
                             $submit.css('display', 'none');
                          }
                      });    		
                      }
                    
                } );
            }
        };
        contactForm();
    
    });

  return (
    <div className="contactbody">
      <div className="content">

<div className="container">
    <div className="row align-items-stretch no-gutters contact-wrap">
        <div className="col-md">
            <div className="form h-100">
                <h3>Send us a message</h3>
                <form action="/sendMail" method="POST" className="mb-5">
                    <div className="row">
                        <div className="col-md-6 form-group mb-5">
                            <label for="" className="col-form-label">Name *</label>
                            <input type="text" className="form-control" name="name" id="name"
                                placeholder="Username"/>
                        </div>
                        <div className="col-md-6 form-group mb-5">
                            <label for="" className="col-form-label">Email *</label>
                            <input type="text" className="form-control" name="email" id="email"
                                placeholder="Your email"/>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-6 form-group mb-5">
                            Did you contact us before? <br/>
                            <ul className="list">
                                <li className="list__item">
                                    <label className="label--radio">
                                        <input type="radio" className="radio" checked name="foo"/>
                                        Yes
                                    </label>
                                </li>
                                <li className="list__item">
                                    <label className="label--radio">
                                        <input type="radio" className="radio" name="foo"/>
                                        No
                                    </label>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-6 form-group mb-5">
                            Are you a member? <br/>
                            <ul className="list">
                                <li className="list__item">
                                    <label className="label--radio">
                                        <input type="radio" className="radio" checked name="foo"/>
                                        Yes
                                    </label>
                                </li>
                                <li className="list__item">
                                    <label className="label--radio">
                                        <input type="radio" className="radio" name="foo"/>
                                        No
                                    </label>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-12 form-group mb-5">
                            <label for="message" className="col-form-label">Message *</label>
                            <textarea className="form-control" name="message" id="message" cols="30" rows="4"
                                placeholder="Elaborate your concern :-"></textarea>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12 form-group">
                            <button type="submit" value="Submit"
                                className="btn btn-primary rounded-0 py-2 px-4">Submit</button>
                            <span className="submitting"></span>
                        </div>
                    </div>
                </form>

                <div id="form-message-warning mt-4"></div>
                <div id="form-message-success">
                    Your message was sent, thank you!
                </div>

            </div>
        </div>

    </div>
</div>
</div>
    </div>
  )
}
