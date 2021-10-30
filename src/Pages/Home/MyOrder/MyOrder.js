import React from 'react';
import useAuth from '../../../Hook/useAuth';

const MyOrder = () => {
    const {users,setUsers,allContext}=useAuth();
    const {user}=allContext;
    console.log(user.email);
    
    // const {email}=users;
    const findResult=users.filter(singleUser=> singleUser.userEmail==user.email )
    console.log(findResult);

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
    


    return (
        <div>
            {
               findResult.length? findResult.map(singleResult=> <li key={singleResult._id}> {singleResult.serviceName}:{singleResult.userEmail}: <button onClick={()=>handelDelete(singleResult._id)}>Delete</button> </li> ): <div><h2>no order found</h2></div>
            }
        </div>
    );
};

export default MyOrder;