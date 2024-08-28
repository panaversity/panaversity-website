import React, { useState } from 'react'
import { Button } from '../ui/button'
import { FieldError, UseFormGetValues } from 'react-hook-form'
import { toast } from 'sonner'
import { z } from 'zod'
import OtpTimer from './OTP_Timer'

const emailSchema = z.string().email('Invalid email format')

const SendOTP = ({
  error,
  getValue,
}: {
  error: FieldError | undefined
  getValue: UseFormGetValues<{
    fullName: string
    fatherName: string
    cnic: string
    phoneNumber: string
    city: string
    email: string
    otp: string
    dateOfBirth: Date
    gender: 'male' | 'female'
    highestQualification:
      | 'Matric / O Levels'
      | 'Intermediate / A Levels'
      | "Undergraduate (Bachelor's)"
      | "Graduate (Master's)"
      | 'Post-Graduate (PhD)'
  }>
}) => {
  const [loading, setloading] = useState(false)
  const [resendOtpAvailable, setResendOtpAvailable] = useState(true)
  const sendOTP = async (email: string) => {
    setloading(true)
    const response = await fetch('/api/sendotp', {
      body: JSON.stringify({ email }),
      method: 'POST',
    })

    const res = await response.json()

    if (!response.ok) throw new Error(res.message)

    return res
  }

  const handleOTP = async () => {
    if (!resendOtpAvailable) {
      toast.error('Please wait before resending the OTP.')
      return
    }
    const result = emailSchema.safeParse(getValue('email'))

    if (result.success) {
      toast.promise(sendOTP(result.data), {
        loading: 'Sending OTP...',
        success: () => {
          setloading(false)
          setResendOtpAvailable(false)
          return `OTP sent to ${result.data}`
        },
        error: (err) => {
          setloading(false)
          return `Failed to send OTP: ${err.message}`
        },
      })

      console.log(result.data)
    } else {
      toast.error('Invalid Email')
      setloading(false)
      return
    }
  }
  return (
    <>
      {!resendOtpAvailable ? (
        <OtpTimer duration={60} func={() => setResendOtpAvailable(true)} />
      ) : (
        <Button
          className=' bg-custom-color hover:bg-custom-color'
          disabled={!resendOtpAvailable || loading}
          onClick={() => handleOTP()}
          type='button'
        >
          Send OTP
        </Button>
      )}
    </>
  )
}

export default SendOTP
