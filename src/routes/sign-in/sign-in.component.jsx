// import { useEffect } from 'react';
// import { getRedirectResult } from 'firebase/auth';

import { 
  auth,
  signInWithGooglePopup, 
  // signInWithGoogleRedirect,
  createUserDocumentFromAuth 
} from '../../utils/firebase/firebase.utils';
// import { async } from '@firebase/util';

const SignIn = () => {
  // useEffect(() => {
  //   const response = getRedirectResult(auth);
  //   console.log(response);
  //   if(response) {
  //     const userDocRef = createUserDocumentFromAuth(response);
  //   }
  // }, []);

  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    // console.log(user);
    const userDocRef = await createUserDocumentFromAuth(user);
  }

  return (
    <div>
      <h3>Hey, sign in please.</h3>
      <button onClick={logGoogleUser}>
        Sign in with Google Popup
      </button>
      {/* <button onClick={signInWithGoogleRedirect}>
        Sign in with Google Redirect
      </button> */}
    </div>
  );
}

export default SignIn;