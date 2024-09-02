// /* eslint-disable react/prop-types */
// import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
// import { auth } from "../Firebase/firebase.config";
// import { GithubAuthProvider, GoogleAuthProvider } from "firebase/auth/web-extension";
// import { createContext, useEffect, useState } from "react";


// export const AuthContext = createContext(null)


// const AuthProvider = ({ children }) => {

//     const [user, setUser] = useState(null)
//     const [loading, setLoading] = useState(true)

//     const googleProvider = new GoogleAuthProvider();
//     const githubProvider = new GithubAuthProvider();
//     // const axiosPublic = useAxiosPublic()

//     const registerUser = (email, password) => {
//         setLoading(true)
//         return createUserWithEmailAndPassword(auth, email, password)
//             .then(result => console.log(result.user))
//     }


//     const loginUser = (email, password) => {
//         setLoading(true)
//         return signInWithEmailAndPassword(auth, email, password)
//         //    .then(result => console.log(result.user))
//     }

//     const googleLogin = () => {
//         setLoading(true)
//         return signInWithPopup(auth, googleProvider)
//     }

//     const updateUserProfile = (name, photo) => {
//         return updateProfile(auth.currentUser, {
//             displayName: name, photoURL: photo
//         })
//     }

//     const githubLogin = () => {
//         setLoading(true)
//         return signInWithPopup(auth, githubProvider)
//     }


//     const logOut = () => {
//         setLoading(true)
//         return signOut(auth)
//     }

//     // useEffect(() => {
//     //     const unSubscribe = onAuthStateChanged(auth, currentUser => {
//     //         console.log('current value of the current user, ', currentUser);
//     //         setUser(currentUser)
//     //     //     if (currentUser) {
//     //     //         // get token and store client
//     //     //         const userInfo = { email: currentUser.email }
//     //     //         axiosPublic.post('/jwt', userInfo)
//     //     //             .then(res => {
//     //     //                 if (res.data) {
//     //     //                     localStorage.setItem('access-token', res.data.token)
//     //     //                 }
//     //     //             })
//     //     //     }
//     //     //     else {
//     //     //         //do somethings
//     //     //         localStorage.removeItem('access-token')
//     //     //     }
//     //     //     setLoading(false)
//     //     // 
//     //     })
//     //     return () => {
//     //         unSubscribe()
//     //     }
//     // }, [])

//     useEffect(() => {
//         const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
//             setUser(currentUser);
//             setLoading(false);
//         });
//         return () => unsubscribe();
//     }, []);

//     const authInfo = {
//         registerUser,
//         loginUser,
//         googleLogin,
//         githubLogin,
//         user,
//         logOut,
//         loading,
//         updateUserProfile

//     }

//     return <div>
//         <div>
//             <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
//         </div>
//     </div>;
// };
// export default AuthProvider;

import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { auth } from "../Firebase/firebase.config";
import { GoogleAuthProvider, GithubAuthProvider } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import UseAxiosPublic from "../hooks/useAxiosPublic";

// export const AuthContext = createContext(null);

// const AuthProvider = ({ children }) => {
//     const [user, setUser] = useState(null);
//     const [loading, setLoading] = useState(true);

//     const googleProvider = new GoogleAuthProvider();
//     const githubProvider = new GithubAuthProvider();

//     const registerUser = (email, password) => {
//         setLoading(true);
//         return createUserWithEmailAndPassword(auth, email, password)
//             .then(result => {
//                 setUser(result.user);
//                 setLoading(false);
//             })
//             .catch(error => {
//                 setLoading(false);
//                 throw error;
//             });
//     };

//     const loginUser = (email, password) => {
//         setLoading(true);
//         return signInWithEmailAndPassword(auth, email, password)
//             .then(result => {
//                 setUser(result.user);
//                 setLoading(false);
//             })
//             .catch(error => {
//                 setLoading(false);
//                 throw error;
//             });
//     };

//     const googleLogin = () => {
//         setLoading(true);
//         return signInWithPopup(auth, googleProvider)
//             .then(result => {
//                 setUser(result.user);
//                 setLoading(false);
//             })
//             .catch(error => {
//                 setLoading(false);
//                 throw error;
//             });
//     };

//     const githubLogin = () => {
//         setLoading(true);
//         return signInWithPopup(auth, githubProvider)
//             .then(result => {
//                 setUser(result.user);
//                 setLoading(false);
//             })
//             .catch(error => {
//                 setLoading(false);
//                 throw error;
//             });
//     };

//     const updateUserProfile = (name, photo) => {
//         if (auth.currentUser) {
//             return updateProfile(auth.currentUser, { displayName: name, photoURL: photo });
//         }
//         return Promise.reject(new Error("No user is signed in"));
//     };

//     const logOut = () => {
//         setLoading(true);
//         return signOut(auth)
//             .then(() => {
//                 setUser(null);
//                 setLoading(false);
//             })
//             .catch(error => {
//                 setLoading(false);
//                 throw error;
//             });
//     };

//     useEffect(() => {
//         const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
//             setUser(currentUser);
//             setLoading(false);
//         });
//         return () => unsubscribe();
//     }, []);

//     const authInfo = {
//         registerUser,
//         loginUser,
//         googleLogin,
//         githubLogin,
//         user,
//         logOut,
//         loading,
//         updateUserProfile,
//     };

//     return (
//         <AuthContext.Provider value={authInfo}>
//             {children}
//         </AuthContext.Provider>
//     );
// };

// export default AuthProvider;



export const AuthContext = createContext(null)



// eslint-disable-next-line react/prop-types
const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();
    const axiosPublic = UseAxiosPublic()

    const registerUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
        // .then(result => console.log(result.user))
    }



    const loginUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
        //    .then(result => console.log(result.user))
    }
    const googleLogin = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }
    const updateUserProfile = (name, photo) => {
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
        })
    }

    const githubLogin = () => {
        setLoading(true)
        return signInWithPopup(auth, githubProvider)
    }


    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            console.log('current value of the current user, ', currentUser);
            setUser(currentUser)
            if (currentUser) {
                // get token and store client
                const userInfo = { email: currentUser.email }
                axiosPublic.post('/jwt', userInfo)
                    .then(res => {
                        if (res.data.token) {
                            localStorage.setItem('access-token', res.data.token)
                        }
                    })
            }
            else {
                //do somethings
                localStorage.removeItem('access-token')
            }
            setLoading(false)
        });
        return () => {
            unSubscribe()
        }
    }, [])

    const authInfo = {
        registerUser,
        loginUser,
        googleLogin,
        githubLogin,
        user,
        logOut,
        loading,
        updateUserProfile

    }

    return (
        <div>
            <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;