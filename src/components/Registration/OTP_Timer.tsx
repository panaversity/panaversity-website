'use client'
import { useEffect, useState } from 'react'
import { Button } from '../ui/button'

export default function OtpTimer({
  duration,
  func,
}: {
  duration: number
  func: Function
}) {
  const [timer, setTimer] = useState(duration)

  useEffect(() => {
    let countdown = setInterval(
      () => setTimer((prevTimer) => prevTimer - 1),
      1000
    )

    return () => clearInterval(countdown)
  }, [])

  useEffect(() => {
    if (timer === 0) func()
  }, [timer, func])

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60)
    const seconds = time % 60

    return `${minutes}:${seconds.toString().padStart(2, '0')}`
  }

  return (
    <Button className='flex flex-col' disabled={true} type='button'>
      <p> Resend OTP in: </p>
      <time>{formatTime(timer)}</time>
    </Button>
  )
  //   return <div>{formatTime(timer)}</div>
}
