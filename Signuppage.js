import React, { useRef,useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

function Signuppage(){
    const[loggedIn,setloggedIn]=useState(false)
    const emailRef=useRef()
    const passRef=useRef()
    const confirmpassRef=useRef()
    function signup(e){
        e.preventDefault()
        const email = emailRef.current.value;
        const pass= passRef.current.value;
        const confirmpass=confirmpassRef.current.value;
        // console.log(email,pass,confirmpass)
        if(!email.includes("@")){
            alert('Enter Correct Email')
        }
        if(pass.length!==confirmpass.length && pass!==confirmpass){
            alert("enter correct password")
        }
        const userdata={
            Email:email,
            Password:pass
        }
        if(!loggedIn){
            fetch('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBWAai-YRPJ8fRwGXSB0LiHg1JkaxQv-zo',
            {
                method:'POST',
                body:JSON.stringify({
                    email:email,
                    password:pass,
                    returnSecureToken:true
                }),
                headers:{
                    'Content-Type': 'application/json'
                }

            }).then(res =>{
                if(res.ok){
                    alert("You have successfully signed up")

                }else{
                    res.json().then(data=>{
                        console.log(data)
                    })
                }
            })
        
       console.log("hello")
        }

        emailRef.current.value=""
        passRef.current.value=""
        confirmpassRef.current.value=""

        
    }
    

    return(
        

        <div >
        <center style={{paddingTop:'160px'}}>
          <Card style={{ width: '30rem',height:'25rem' ,display:"center",boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)"}}>
        
          <Card.Body>
        <Card.Title><h3>Sign Up</h3></Card.Title>
        <Card.Text>
          <InputGroup size="lg">
        <InputGroup.Text id="inputGroup-sizing-lg" style={{width:"120px"}}
       
        >Email</InputGroup.Text>
        <Form.Control
          aria-label="Large"
          aria-describedby="inputGroup-sizing-sm"
          ref={emailRef}
        />
         </InputGroup>
         <br></br>
         <InputGroup size="lg">
      <InputGroup.Text id="inputGroup-sizing-lg"
      >Password</InputGroup.Text>
      
        <Form.Control
          aria-label="Large"
          aria-describedby="inputGroup-sizing-sm"
          ref={passRef}
        />
      </InputGroup>
      <br></br>
      <InputGroup size="lg">
      <InputGroup.Text id="inputGroup-sizing-lg"
      ref={confirmpassRef}>Confirm Password</InputGroup.Text>
      
        <Form.Control
          aria-label="Large"
          aria-describedby="inputGroup-sizing-sm"
          ref={confirmpassRef}
        />
      </InputGroup>
        </Card.Text>
        {/* <Button variant="primary" size="lg" style={{borderRadius:"50px"}}>
        Sign Up
      </Button> */}
      <Button variant="primary" size="lg" active style={{height:"60px",width:"300px"}}
      onClick={signup}>
        Sign up
      </Button>
        </Card.Body>
    
    </Card>
    <Button style={{marginTop:"20px",backgroundColor:"green",height:"60px",width:"300px"}}>Have an Account?Log In</Button>
    </center>
        </div>
    )

}

export default Signuppage