import { useNavigate } from 'react-router'
import { HugeiconsIcon } from '@hugeicons/react'
import { AlertCircleIcon } from '@hugeicons/core-free-icons'

const ErrorPage = () => {
  const navigate = useNavigate()

  return (
    <div className='flex min-h-screen flex-col items-center justify-center bg-border/50 p-6'>
      <div className='flex w-full max-w-md flex-col items-center rounded-xl border border-border p-10 text-center'>
        <div className='mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-primary-light'>
          <HugeiconsIcon
            icon={AlertCircleIcon}
            size={32}
            className='text-primary'
          />
        </div>
        <p className='text-5xl font-bold text-primary leading-none mb-2'>404</p>
        <h1 className='text-base font-bold text-black mb-2'>Page not found</h1>
        <p className='text-xs text-neutral-10 mb-8'>
          The page you're looking for doesn't exist or has been moved.{' '}
        </p>
        <div className='flex items-center justify-center gap-2.5  w-full'>
          <button
            onClick={() => navigate(-1)}
            className='cursor-pointer rounded border border-border bg-white px-5 py-2.5 text-xs font-medium text-black '
          >
            Go back
          </button>
          <button
            onClick={() => navigate('/')}
            className='cursor-pointer rounded bg-primary px-5 py-2.5 text-xs font-semibold text-white'
          >
            Go to Home
          </button>
        </div>
      </div>
    </div>
  )
}
export default ErrorPage
