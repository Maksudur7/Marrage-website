import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import PropTypes from 'prop-types';
import app from "./Firebase";
import useAxiousPublic from "../../Hooks file/useAxiousPublic";


export const AuthContext = createContext()

const Auth = getAuth(app)

const AuthProvider = ({ children }) => {

    const axiousPublic = useAxiousPublic()
    const [loding, setloding] = useState(true)

    const createUser = (email, password) => {
        setloding(true)
        return createUserWithEmailAndPassword(Auth, email, password)
    }

    const signin = (email, password) => {
        setloding(true)
        return signInWithEmailAndPassword(Auth, email, password)
    }
    const provider = new GoogleAuthProvider(null)
    const googleLogin = () => {
        setloding(true)
        return signInWithPopup(Auth, provider)
    }

    const logOut = () => {
        setloding(true)
        signOut(Auth)
    }

    const [users, serUsers] = useState(null)
    const [name, setName] = useState(null)
    const [photo, setPhoto] = useState(null)
    useEffect(() => {
        const unSuscribe = onAuthStateChanged(Auth, user => {
            console.log(user)
            serUsers(user)
            if (user) {
                const userInfo = { email: user.email }
                axiousPublic.post('/jwt', userInfo)
                    .then(res => {
                        if (res.data.token) {
                            localStorage.setItem('access-token', res.data.token)
                        }
                    })
                    .catch(error => {
                        console.log(error)
                    })
            }
            else {
                localStorage.removeItem('access-token')
            }
            setloding(false)
            setName(user.displayName)
            setPhoto(user.photoURL)
            // console.log(user.photoURL)
        })
        return () => {
            unSuscribe()
        }
    }, [])
    const profileAdnName = (name, Url) => {
        return updateProfile(Auth.currentUser, {
            displayName: name, photoURL: Url
        })
    }


    const authInfo = {
        createUser,
        signin,
        users,
        logOut,
        loding,
        name,
        photo,
        profileAdnName,
        googleLogin

    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.object.isRequired
}

export default AuthProvider;