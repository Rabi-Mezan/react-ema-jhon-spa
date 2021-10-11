import { useState } from "react"
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
import initAuth from "../Firebase/init";
import { useEffect } from "react";


initAuth();
const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState('')


    const googleProvider = new GoogleAuthProvider();
    const auth = getAuth();

    //sign in
    const signInWithGoogle = () => {
        return signInWithPopup(auth, googleProvider)


    }
    //sign out
    const logOut = () => {
        signOut(auth)
            .then(() => {
                setUser({})
            })
    }


    // observe user on state change
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            }
        });
    }, [])

    return {
        user,
        error,
        signInWithGoogle,
        logOut

    }
}

export default useFirebase;