import React, { useState } from 'react';
import useAuth from '../../Hook/useAuth';

const AllOrder = () => {
    const {users,setUsers,elements}=useAuth();
    const [singleUser, setSingleUser]=useState({})
    const {email,orderStatus}=users;
    // const findOrder=elements.filter(element=>element.)
    console.log(users);



const handelDelete=id=>{
    const proceed=window.confirm('are you sure u want ot delete this item')
    if(proceed){
        const url=`http://localhost:5000/users/${id}`;
        fetch(url,{
            method:'DELETE'
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            if(data.deletedCount>0){
                alert('deleted successFully');
                const remainingUsers=users.filter(user=>user._id!==id);
                console.log(remainingUsers)
                setUsers(remainingUsers);
            }
        })
    }
}
// const handleStatusUpdate=id=>{


//     const url=`http://localhost:5000/users/${id}`;

//     fetch(url,{
//         method:'PUT',
//         headers:{
//             'content-type':'application/json'
//         },
//         body:JSON.stringify()
//     })
   

    

// }

    return (
        <div>
            {
              users.length? users.map(user=> <li key={user._id}>{user.serviceName}:{user.userEmail}:Status:{user.orderStatus} <button onClick={()=>handelDelete(user._id)}>Delete</button>
              <button>Status Update</button> </li> ):<li>No order found</li>
            }
        </div>
    );
};

export default AllOrder;