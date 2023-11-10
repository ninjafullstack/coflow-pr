import SignIn from '@/components/Auth/SignIn'

const SignInPage = ({ searchParams: { callbackUrl } }) => {
  return (
    <SignIn callbackUrl={callbackUrl || "/"} />
  )
}

export default SignInPage