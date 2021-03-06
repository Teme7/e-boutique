import { useState } from 'react';

import { createAuthUserWithEmailAndPassword } from '../../utils/firebase/firebase.utils';
import { createUserDocumentFromAuth } from '../../utils/firebase/firebase.utils';

import FormInput from '../form-input/form-input.component';
import Button from '../button/button.component';

import { SignUpFormContainer } from './sign-up-form.styles';

const defaultFormFields = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: ''
}

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    if(password !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    try {
      const { user } = await createAuthUserWithEmailAndPassword(email, password);

      await createUserDocumentFromAuth(user, { displayName });
      resetFormFields();
    } catch(error) {
        if(error.code === 'auth/email-already-in-use') {
          alert("Cannot create user; email already in use.");
        } else {
          console.error("User creation encountered an error.", error)
        }
    }
  }

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  }

  return (
    <SignUpFormContainer>
      <h2>Don't have an account?</h2>
      <span>Sign up with your email and password</span>
      <form onSubmit={handleSubmit}>

        <FormInput
          label='Display Name'
          type='text' 
          required 
          onChange={handleChange} 
          name='displayName' 
          value={displayName}
        />

        <FormInput
          label='Email'
          type='email' 
          required 
          onChange={handleChange} 
          name='email' 
          value={email} 
        />

        <FormInput 
          label='Password'
          type='password' 
          required 
          onChange={handleChange} 
          name='password' 
          value={password} 
        />

        <FormInput
          label='Confirm Password'
          type='password' 
          required 
          onChange={handleChange} 
          name='confirmPassword' 
          value={confirmPassword} 
        />

        <Button type='submit'>Sign Up</Button>
      </form>
    </SignUpFormContainer>
  )
}

export default SignUpForm;
