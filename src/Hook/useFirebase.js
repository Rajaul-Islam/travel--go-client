import { GoogleAuthProvider, getAuth, signInWithPopup, signOut,onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { useState } from "react";
import firebaseInitialize from "../firebase/firebase.inti";
firebaseInitialize();




const auth = getAuth();

//provider 
const googleProvider = new GoogleAuthProvider()

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState('')


    //google sign in
    const signInWithGoogle = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                console.log(result.user);
                setUser(result.user)
            })
            .catch(error => {
                setError(error.message)

            })



    }



    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)

            } else {

                setUser({})
            }
        });
        return () => unsubscribed;
    }, [])
    //logout
    const logOut = () => {
        signOut(auth).then(() => {
            setUser({})
        }).catch((error) => {
            setError(error)
        });
    }
    return {
        signInWithGoogle,
        logOut,
        user,
        setUser,
        error

    };
};

export default useFirebase;