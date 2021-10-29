import React from 'react';
import { createContext } from 'react';
import useElements from '../Hook/useElements';
import useFirebase from '../Hook/useFirebase';


export const AuthContext=createContext();

const AuthProvider = ({children}) => {
    const allContext=useFirebase();
    const {elements}=useElements();
    const data={allContext,elements};
    return (
        <AuthContext.Provider value={data} >
                {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;