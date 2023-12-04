

import {auth,provider} from '../../config/firebase-config';
import {signInWithPopup} from 'firebase/auth';
import {Navigate, useNavigate} from 'react-router-dom';
import {useGetUserInfo} from  "../../hooks/useGetUserInfo";

export const Auth = () => {
    
    const navigate = useNavigate();
    const {isAuth} = useGetUserInfo();
    
    const signInWithGoogle = async () => {
        //results include all the information from the user sign in
        const results = await signInWithPopup(auth, provider);
        const authInfo = {
            userID: results.user.uid,
            name: results.user.displayName,
            profilePhoto: results.user.photoURL,
            isAuth: true,
        }
        localStorage.setItem("auth", JSON.stringify(authInfo));
        navigate("/buttons");
    };

    if (isAuth){
        return <Navigate to="/buttons"/>
    }
    return <div className="login-page">
        <p>Sign In with Google to Continue</p>
        <button className="login-with-google-button" onClick={signInWithGoogle}>
        {""}
        Sign In with Google
        </button>
    </div>
}