import { createContext , useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { app } from "../Firebase/Firebase.confing";



export const AuthContext = createContext(null)     
 const auth = getAuth(app)
const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading]= useState(true)

// user login
const createUser = (email, password)=>{
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password)
}

const login =(email, password)=>{
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password)
}

const logOut = ()=>{
    setLoading(true)
    return signOut(auth)
}
useEffect(()=>{
 const unsubscrie=onAuthStateChanged(auth, currentUser=>{
        setUser(currentUser);
        setLoading(false)
    })
    return() =>{
        return  unsubscrie();
    }
},[])
 

    const authInfo = {
        user,
        loading,
        createUser,
        login,
        logOut

    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;