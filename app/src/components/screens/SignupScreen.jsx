import React,{forwardRef, useState} from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";

function SignupScreen() {
const [formValues,setFormValues]=useState({
  firstname:"",
  lastname:"",
  email:"",
  password:"",
  confirmpassword:"",
  phoneNumber:"",
  gender:"",
  userType:"",
  termsAccepted:false,
})
const [formErrors,setFormErrors]=useState({
  firstname:"",
  lastname:"",
  email:"",
  password:"",
  confirmpassword:"",
  phoneNumber:"",
  gender:"",
  userType:"",
  termsAccepted:false,
})


const handleChange=(e)=>{
  console.log(e.target.value)
  
  const {name,value,type,checked}=e.target;
  const newValue=type==="checkbox"?checked:value;

  setFormValues({
    ...formValues,
    [name]:newValue
  })
  validateField(name,newValue)
}
const isFormValid=()=>{
   return Object.values(formErrors).every((error)=>error===null)&&
   Object.values(formValues).every((value)=>value!==""&& value!==false)

}

const getValidateClass=(name)=>{
  if(formValues[name]==="") return"";
  return formErrors[name]?"is-invalid":"is-valid"
}



const validateField=(name,value)=>{
  let errorMessage=null;
  switch(name){
    case"firstname":
    case "lastname":
      if(!value){
        errorMessage="The filed is required.."

      }
      break;
 

      case "email":
      const emailRegex=/^[^s@]+@[^\s@]+\.[^\s@]+$/;
      if(!emailRegex.test(value)){
        errorMessage="Invalid email format.."
      }
      break;
      case "password":
        if(value.length<6){
          errorMessage="Password must be at least 6 characters."
        }
        break;
        case "confirmpassword":
          if(value!==formValues.password){
            errorMessage="Password do not match."
          }
          break;
          case "phoneNumber":
            if(!value|| value.length<10){
              errorMessage="Phone Number must be atleast 10 digit."
            }
            break;
           case "gender" :
            if(!value){
              errorMessage="Please select your gender."
            }
            break;
            case "userType":
              if(!value){
                errorMessage="please select User Type."
              }
              break;
              case "termsAccepted":
                if(!value){
                  errorMessage="You must accept the terms and condition"
                }
                break;
                default:
                  break;
  }

  setFormErrors({
    ...formErrors,
    [name]:errorMessage
  })
}











  return (
    <>
      <Container>
        <Row>
          <Col md="3"></Col>
          <Col md="6">
            <Form>
              <br />
              <h1 className="text-center">Signup Here</h1>
              <Form.Group controlId="firstname">
                <Form.Label>First Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Your First Name"
                name="firstname"
                  value={formValues.firstname}
                  onChange={handleChange}
                  isInvalid={!!formErrors.firstname}
                  className={getValidateClass("firstname")}
                ></Form.Control>
                <Form.Control.Feedback type="invalid">
                  {formErrors.firstname}
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group controlId="lastname" className="mt-3">
                <Form.Label>Last Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Your Last Name "
                  name="lastname"
                  value={formValues.lastname}
                  onChange={handleChange}
                  isInvalid={!!formErrors.lastname}
                  className={getValidateClass("lastname")}
                ></Form.Control>
                <Form.Control.Feedback type="invalid">{formErrors.lastname}</Form.Control.Feedback>
              </Form.Group>

              <Form.Group controlId="email" className="mt-3">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter Your Email"
                  name="email"
                  value={formValues.email}
                  onChange={handleChange}
                  isInvalid={!!formErrors.email}
                  className={getValidateClass("email")}
                ></Form.Control>
                <Form.Control.Feedback type="invalid">{formErrors.email}</Form.Control.Feedback>
              </Form.Group>

              <Form.Group controlId="pass1" className="mt-3">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Enter Your Password"
                  name="password"
                  value={formValues.password}
                  onChange={handleChange}
                  isInvalid={!!formErrors.password}
                  className={getValidateClass("password")}
                ></Form.Control>
                <Form.Control.Feedback type="invalid">{formErrors.password}</Form.Control.Feedback>
              </Form.Group>

              <Form.Group controlId="pass2" className="mt-3">
                <Form.Label>Confirm Password </Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Enter Your Confirm password"
                  name="confirmpassword"
                  value={formValues.confirmpassword}
                  onChange={handleChange}
                  isInvalid={!!formErrors.confirmpassword}
                  className={getValidateClass("confirmpassword")}
                ></Form.Control>
                <Form.Control.Feedback type="invalid" >{formErrors.confirmpassword}</Form.Control.Feedback>
              </Form.Group>
              <Form.Group controlId="ph" className="mt-3">
                <Form.Label>Phone Number</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Enter Your number"
                  name="phoneNumber"
                  value={formValues.phoneNumber}
                  onChange={handleChange}
                  isInvalid={!!formErrors.phoneNumber}
                  className={getValidateClass("phoneNumber")}
                ></Form.Control>
                <Form.Control.Feedback type="invalid"> {formErrors.phoneNumber} </Form.Control.Feedback>
              </Form.Group>
<br />
              <Form.Select  aria-label="select gender"
              name="gender"
              value={formValues.gender}
              onChange={handleChange}
              isInvalid={!!formErrors.gender}
              className={getValidateClass("gender")}
             
              >
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </Form.Select>
                              <Form.Control.Feedback type="invalid">{formErrors.gender}</Form.Control.Feedback>

              <div key={`inline-radio`} className="mt-3">
                <Form.Check
                  inline
                  label="Student"
                  name="userType"
                  value="Student"
                  onChange={handleChange}
                  type="radio"
                  id={`inline-radio-1`}
                  checked={formValues.userType==="Student"}
                  isInvalid={!!formErrors.userType}
                  className={getValidateClass("userType")}
                ></Form.Check>
                <Form.Check
                  inline
                  label="Professional"
                  name="userType"
                  value="Professional"
                  onChange={handleChange}
                  type="radio"
                  id={`inline-radio-2`}
                  checked={formValues.userType==="Professional"}
                  isInvalid={!!formErrors.userType}
                  className={getValidateClass("userType")}
                ></Form.Check>
                <Form.Control.Feedback type="invalid">{formErrors.userType} </Form.Control.Feedback>
              </div>

              <Form.Group className="mt-3">
                <Form.Check
                  required
                  label="Agree to terms and conditions"
                  feedback="You must agree before submitting."
                  name="termsAccepted"
                  value={formValues.termsAccepted}
                  checked={formValues.termsAccepted}
                  onChange={handleChange}
                  isInvalid={!!formErrors.termsAccepted}
                  className={getValidateClass("termsAccepted")}
                ></Form.Check>
                <Form.Control.Feedback type="invalid">{formErrors.termsAccepted}</Form.Control.Feedback>
              </Form.Group>
              <Button className="mt-3" variant="success" type="button" disabled={!isFormValid()} >Register</Button>

              
            </Form>
          </Col>
          <Col md="3"></Col>
        </Row>
      </Container>
    </>
  );
}

export default SignupScreen;
