import ResetPasswordComponent from "@/components/Auth/ResetPassword"

const ResetPasswordPage = ({ searchParams: { token } }) => {
  return (
    <ResetPasswordComponent token={token} />
  )
}

export default ResetPasswordPage