import React, { useState } from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Sign_img from "./sign_img";
import { NavLink } from "react-router-dom";


const Home =()=>{

const [inpval, setInpval]= useState({
    name:"",
    email:"",
    date:"",
    password:""
})
//console.log(inpval);
const [data,setData] = useState([]);
const getData =(e) =>{

 //console.log(e.target.value);   
const {value, name}= e.target;
//console.log(value,name);
setInpval(()=>{
    return{
      ...inpval,
      [name]:value  
    }
})

}
// const addData =(e)=>{
//     e.preventDefault();
//     const {name,email,date,password} = inpval;
//     if(name === ""){
//         alert("name is required");
//     }else if(email===""){
//         alert("email is required");
//     }else if(!email.includes("@")){
//         alert("plz enter the valid email");
//     }else if(date===""){
//         alert("date is required");
//     }else if(password===""){
//         alert("password is required");
//     }else if(password.length<5){
//         alert("password should be greater than 5 characters");
//     }else{
//         console.log("data added successfully");
//         localStorage.setItem("user",JSON.stringify([...data,inpval]));
//         localStorage.setItem("user_name", inpval.name);
//     }
// }


//     return(
//         <>
//         <div className="container mt-3">
//             <section className="d-flex justify-content-between">
//                 <div className="left_data mt-3 p-3" style={{width:"100%"}}>
//                     <h3 className="text-center col-lg-6">Sign Up</h3>
//                     <Form onSubmit={addData}>
//       <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
        
//         <Form.Control type="text" name="name" onChange={getData} placeholder="Enter Your Name" />
       
//       </Form.Group>
//       <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
        
//         <Form.Control type="email" name="email" onChange={getData} placeholder="Enter email" />
       
//       </Form.Group>
//       <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
        
//         <Form.Control onChange={getData} name="date" type="date" />
       
//       </Form.Group>

//       <Form.Group className="mb-3 col-lg-6" controlId="formBasicPassword">
       
//         <Form.Control type="password" name="password" onChange={getData} placeholder="Password" />
//       </Form.Group>
      
        
      
//       <Button variant="primary" className="col-lg-6" onChange={addData} style={{backgroundColor:"green"}} type="submit">
//         Submit
//       </Button>
//     </Form>
//     <p className='mt-3'>Already Have an Account <span><NavLink to="/login">SignIn</NavLink></span> </p>
//                 </div>
//               <Sign_img/>
//             </section>
//         </div>
//         </>
//     )
// }
const [isSubmitted, setIsSubmitted] = useState(false);

const addData = (e) => {
  e.preventDefault();
  const { name, email, date, password } = inpval;
  if (name === "") {
    alert("name is required");
  } else if (email === "") {
    alert("email is required");
  } else if (!email.includes("@")) {
    alert("plz enter the valid email");
  } else if (date === "") {
    alert("date is required");
  } else if (password === "") {
    alert("password is required");
  } else if (password.length < 5) {
    alert("password should be greater than 5 characters");
  } else {
    console.log("data added successfully");
    localStorage.setItem("user", JSON.stringify([...data, inpval]));
    localStorage.setItem("user_name", inpval.name);
    setIsSubmitted(true); // set the state variable to true
  }
};

return (
  <>
    <div className="container mt-3">
      <section className="d-flex justify-content-between">
        <div className="left_data mt-3 p-3" style={{ width: "100%" }}>
          <h3 className="text-center col-lg-6">Sign Up</h3>
          <Form onSubmit={addData}>
            <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
              <Form.Control
                type="text"
                name="name"
                onChange={getData}
                placeholder="Enter Your Name"
              />
            </Form.Group>
            <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
              <Form.Control
                type="email"
                name="email"
                onChange={getData}
                placeholder="Enter email"
              />
            </Form.Group>
            <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
              <Form.Control onChange={getData} name="date" type="date" />
            </Form.Group>
            <Form.Group className="mb-3 col-lg-6" controlId="formBasicPassword">
              <Form.Control
                type="password"
                name="password"
                onChange={getData}
                placeholder="Password"
              />
            </Form.Group>
            <Button
              variant="primary"
              className="col-lg-6"
              style={{ backgroundColor: "green" }}
              type="submit"
            >
              Submit
            </Button>
          </Form>
          {isSubmitted && ( // show the message if the form has been submitted
            <p className="mt-3" style={{ color: "green" }}>
              Form submitted successfully
            </p>
          )}
          <p className="mt-3">
            Already Have an Account{" "}
            <span>
              <NavLink to="/login">SignIn</NavLink>
            </span>{" "}
          </p>
        </div>
        <Sign_img />
      </section>
    </div>
  </>
);
}
export default Home;