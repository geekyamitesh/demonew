import React from 'react'
import { Link, BrowserRouter } from 'react-router-dom';
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import { Form, Button } from 'react-bootstrap'

import './Footer.css'

const Footer = () => {
    return (
        <BrowserRouter>
            <MDBFooter color="blue-grey" className="page-footer font-small lighten-5 pt-0">
                <div style={{ backgroundColor: "#008f11" }}>
                    <MDBContainer>
                        <MDBRow className="py-4 d-flex align-items-center">
                            <MDBCol md="6" lg="5" className="text-center text-md-left mb-4 mb-md-0">
                                <h6 className="mb-0 " style={{ color: "white" }}> Get connected with us on social networks!</h6>
                            </MDBCol>
                            <MDBCol md="6" lg="7" className="text-center text-md-right">
                                <Link to="/" className="fb-ic ml-0">
                                    <i className="fab fa-facebook-f white-text mr-lg-4"> </i>
                                </Link>
                                <Link to="/" className="tw-ic">
                                    <i className="fab fa-twitter white-text mr-lg-4"> </i>
                                </Link>
                                <Link to="/" className="gplus-ic">
                                    <i className="fab fa-google-plus-g white-text mr-lg-4"> </i>
                                </Link>
                                <Link to="/" className="li-ic">
                                    <i className="fab fa-linkedin-in white-text mr-lg-4"> </i>
                                </Link>
                                <Link to="/" className="ins-ic">
                                    <i className="fab fa-instagram white-text mr-lg-4"> </i>
                                </Link>
                            </MDBCol>
                        </MDBRow>
                    </MDBContainer>
                </div>
                <MDBContainer className="mt-5 mb-4 text-center text-md-left">
                    <MDBRow className="mt-3">
                        <MDBCol md="3" lg="3    " xl="3" className="mb-4 dark-grey-text">
                            <h6 className="text-uppercase font-weight-bold">
                                <strong>AgroConnectHub</strong>
                            </h6>
                            <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{ width: "60px" }} />
                            <p>
                            AgroConnectHub is designed to foster direct connections within the agriculture industry, addressing the challenge of farmers receiving unfair prices due to intermediaries. This platform eliminates the necessity of contractors for farmers, enabling them to directly purchase farming necessities from sellers and sell their products directly to consumers.
                            </p>
                        </MDBCol>
                        <MDBCol md="2" lg="2" xl="2" className="mb-4 dark-grey-text">
                            <h6 className="text-uppercase font-weight-bold">
                                <strong>Links</strong>
                            </h6>
                            <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{ width: "60px" }} />
                            <p><Link to="/farmer" className="dark-grey-text">Famer</Link></p>
                            <p><Link to="/consumer" className="dark-grey-text">Consumer </Link></p>
                            <p><Link to="/supplier" className="dark-grey-text">Supplier</Link></p>
                            <p><Link to="/cart" className="dark-grey-text">Cart</Link></p>
                        </MDBCol>
                        <MDBCol md="3" lg="3" xl="4" className="mb-4 dark-grey-text">
                            <h6 className="text-uppercase font-weight-bold">
                                <strong>Contact</strong>
                            </h6>
                            <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{ width: "60px" }} />
                            <p><i className="fa fa-home mr-3" /> Punjab, India</p>
                            <p><i className="fa fa-envelope mr-3" />agroConnectHub@gmail.com</p>
                            <p><i className="fa fa-phone mr-3" /> + 01 234 567 88</p>
                            <p><i className="fa fa-print mr-3" /> + 01 234 567 89</p>
                        </MDBCol>
                        <MDBCol md="3" lg="4" xl="3" className="mb-4 dark-grey-text">
                            <h6 className="text-uppercase font-weight-bold">
                                <strong>Get in touch</strong>
                            </h6>
                            <Form>
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control type="email" placeholder="Email" />
                                </Form.Group>

                                <Form.Group controlId="formBasicPassword">
                                    <Form.Label>Comment</Form.Label>
                                    <Form.Control as="textarea" rows={3} type="text" placeholder="Write Your Thoughts" />
                                </Form.Group>
                                <Button variant="primary" type="submit">Send message</Button>
                            </Form>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
                <div className="footer-copyright text-center py-3">
                    <MDBContainer fluid>
                        &copy; {new Date().getFullYear()} Copyright:{" "}
                Sakshi Kumari
                </MDBContainer>
                </div>
            </MDBFooter>
        </BrowserRouter>
    )
}

export default Footer
