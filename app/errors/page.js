'use client'
import { useRouter, useSearchParams } from 'next/navigation'

const Errors = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const errMsg = searchParams.get('error');

  return (
    <div>
      <h1 style={{color: 'red'}}>Errors: {errMsg}</h1>

      <button onClick={() => router.back()}>Try Again</button>
    </div>
  )
}

export default Errors