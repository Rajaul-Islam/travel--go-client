import React from 'react';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../Hook/useAuth';
import useFirebase from '../../Hook/useFirebase';



const Login = () => {
    const history = useHistory()
    const location = useLocation();
    const redirect = location?.state?.from || '/home'
    const { allContext, elements } = useAuth();
    const { signInWithGoogle,
        user,
        setUser,
        error,
        setError,
         setIsLoading } = allContext;





    return (
        <div>
            <h2>Total elements {elements.length}</h2>
            <h1>this is login</h1>
            <button onClick={

                () => signInWithGoogle()
                    .then(result => {
                        setIsLoading(true);
                        console.log(result.user);
                        history.push(redirect);
                        setUser(result.user)

                    })
                    .catch(error => {
                        setError(error.message)

                    })
                    .then(()=>{
                        setIsLoading(false)
                    })


            } className="btn btn-primary mt-2 mx-3">Google Signin</button>
        </div>
    );
};

export default Login;