'use client'
import { signIn } from 'next-auth/react'
import Link from 'next/link'
import Form from '../Global/Form'
import Button from '../Global/Button'
import { forgotPasswordWithCredentials } from '@/actions/authActions'

const SignIn = ({ callbackUrl }) => {

  async function handleCredentialsLogin(formData){
    const email = formData.get('email')
    const password = formData.get('password')

    await signIn('credentials', { email, password, callbackUrl })
  }

  async function handleFotgotPassword(formData){
    const email = formData.get('email')

    const res = await forgotPasswordWithCredentials({email})
    if(res?.msg) alert(res?.msg)
  }


  return (
    <div>
      <h2>Sign In With NextAuth</h2>

      {/* Google Login */}
      <div style={{margin: '30px 0'}}>
        <button onClick={() => signIn('google', { callbackUrl })}>
          Continue with Google
        </button>
      </div>

      {/* SignIn with credentials */}
      <Form action={handleCredentialsLogin} style={{margin: '30px 0'}}>
        <input type="email" name='email' placeholder='Email' required />
        <input type="password" name='password' placeholder='Password' required />
        <Button value="Credentials Login" />
      </Form>

      {/* Forgot Password */}
      <h3>Forgot Password?</h3>
      <Form action={handleFotgotPassword} style={{margin: '10px 0'}}>
        <input type="email" name='email' placeholder='Email' required />
        <Button value="Forgot Password" />
      </Form>

      <div style={{margin: '30px 0'}}>
        <Link href="/signup">Sign Up</Link>
      </div>
    </div>
  )
}

export default SignIn