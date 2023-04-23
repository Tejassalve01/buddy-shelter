import React from 'react';
import Button  from 'react-bootstrap/Button';
import {
    MDBContainer,
    MDBCard,
    MDBCardBody,
    MDBInput,
    MDBCheckbox,
    MDBCardFooter,
    MDBCardHeader
} from 'mdb-react-ui-kit';

function App() {
    return (
        <MDBContainer fluid className='d-flex align-items-center justify-content-center bg-image' style={{ backgroundImage: 'url(https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp)' }}>
            <div className='mask gradient-custom-3'></div>
            <MDBCard className='m-5' style={{ maxWidth: '600px' }}>
                <MDBCardHeader className='px-5 mb'>
                    <h2 className="text-uppercase text-center mb-3 my-3">Create an account</h2>
                </MDBCardHeader>
                <MDBCardBody className='px-5'>
                    <MDBInput wrapperClass='mb-1' label='Your Name' size='lg' id='form1' placeholder='Enter your name' type='text' />
                    <MDBInput wrapperClass='mb-1' label='Your Email' size='lg' id='form2' placeholder='Enter your email' type='email' />
                    <MDBInput wrapperClass='mb-1' label='Password' size='lg' id='form3' placeholder='Enter your password' type='password' />
                    <MDBInput wrapperClass='mb-1' label='Repeat your password' size='lg' id='form4' placeholder='ReEnter your password' type='password' />
                    <div className='d-flex flex-row justify-content-center mb-4'>
                        <MDBCheckbox name='flexCheck' id='flexCheckDefault' label='I agree all statements in Terms of service' />
                    </div>
                    {/* <Button className='mb-4 w-100 gradient-custom-4' size='lg'>Register</Button> */}
                </MDBCardBody>
                <MDBCardFooter className='px-5'>
                    <Button className='mb-4 w-100 gradient-custom-4 my-3' size='lg'>Register</Button>
                </MDBCardFooter>
            </MDBCard>
        </MDBContainer>
    );
}

export default App;

// import React from 'react';
// import { Form, Button } from 'react-bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';
// function RegistrationForm() {
//     return (
//         <div className="container-fluid registration-container">
//             <div className="row">
//                 <div className="col-md-6 col-sm-12 registration-form">
//                     <Form>
//                         <Form.Group controlId="formBasicName">
//                             <Form.Label>Name</Form.Label>
//                             <Form.Control type="text" placeholder="Enter name" />
//                         </Form.Group>

//                         <Form.Group controlId="formBasicEmail">
//                             <Form.Label>Email address</Form.Label>
//                             <Form.Control type="email" placeholder="Enter email" />
//                             <Form.Text className="text-muted">
//                                 We'll never share your email with anyone else.
//                             </Form.Text>
//                         </Form.Group>

//                         <Form.Group controlId="formBasicPassword">
//                             <Form.Label>Password</Form.Label>
//                             <Form.Control type="password" placeholder="Password" />
//                         </Form.Group>

//                         <Button variant="primary" type="submit">
//                             Submit
//                         </Button>
//                     </Form>
//                 </div>
//             </div>
//         </div>
//     );
// }
// export default RegistrationForm;