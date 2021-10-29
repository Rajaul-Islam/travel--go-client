import React from 'react';
import { useRef } from 'react';

const AddElement = () => {
    const nameRef = useRef();
    const emailRef = useRef();


    const handelSubmit = e => {
        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const newUser = { name: name, email: email}

        fetch('http://localhost:5000/elements',{
            method:'post',
            headers:{
                'Content-Type': 'application/json'
                
            },
            body:JSON.stringify(newUser)
            
        })
        .then(res=>res.json())
        .then(data=>{
            // console.log(data._id)
            if(data.insertedId){
                alert('user added successfully')
                e.target.reset();
            }
        })
        .catch(err => {
            // Do something for an error here
            console.log("Error Reading data " + err);
          }); 
        e.preventDefault();
    }
    
    return (
        <div>
            <h2>This is Users</h2>
            <form onSubmit={handelSubmit} action="">
                <input ref={nameRef} type="text" required/>
                <input ref={emailRef} type="email" name="" id="" required/>
                <input type="submit" value="submit" />
            </form>
        </div>
    );
};

export default AddElement;