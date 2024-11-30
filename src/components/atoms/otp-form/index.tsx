import { BUTTON_TYPES, Button } from "@/components/atoms/button";
import TextError from "@/components/atoms/text-error";
import { Context } from '@/store/provider';
import React, { memo, useCallback, useContext, useEffect, useRef, useState } from "react";
import { twMerge } from "tailwind-merge";

// declare type for the props
type InputProps = {
  length?: number;
  onComplete: (otpCode: { otp: string }) => void;
  className?: string
  handleResendOtp: () => void;
  errorMessage?: string
};

const OTPForm = ({ length = 4, onComplete, className, handleResendOtp, errorMessage }: InputProps) => {
  // if you're not using Typescript, simply do const inputRef = useRef()
  const inputRef = useRef<HTMLInputElement[]>(Array(length).fill(null));

  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(5); // set the initial minutes

  const [isActive, setIsActive] = useState(false);
  const [isTimerFinished, setTimerFinished] = useState(false);
  // if you're not using Typescript, do useState()
  const [OTP, setOTP] = useState<string[]>(Array(length).fill(""));

  const [resendOtpSeconds, setResendOtpSeconds] = useState(30);
  const [resendOtpMinutes, setResendOtpMinutes] = useState(0); // set the initial minutes
  const [isResendActive, setIsResendActive] = useState(true); // timer starts automatically on page load
  const [isResendTimerFinished, setResendTimerFinished] = useState(false);

  const resendTick = useCallback(() => {
    if (resendOtpMinutes === 0 && resendOtpSeconds === 0) {
      setIsResendActive(false);
      setResendTimerFinished(false);
    } else if (resendOtpSeconds === 0) {
      setResendOtpMinutes((prevMinutes) => prevMinutes - 1);
      setResendOtpSeconds(59);
    } else {
      setResendOtpSeconds((prevSeconds) => prevSeconds - 1);
    }
  }, [resendOtpMinutes, resendOtpSeconds]);

  useEffect(() => {
    let timer: NodeJS.Timeout | null = null;
    if (isResendActive) {
      timer = setInterval(resendTick, 1000);
    }
    return () => {
      if (timer) clearInterval(timer);
    };
  }, [isResendActive, resendTick]);

  const startResendTimer = () => {
    setIsResendActive(true);
    setResendTimerFinished(true);
    setResendOtpMinutes(0); // reset the minutes
    setResendOtpSeconds(30); // reset the seconds
  };


  const handleTextChange = useCallback(
    (input: string, index: number) => {
      const newPin = [...OTP];
      newPin[index] = input;
      setOTP(newPin);

      // check if the user has entered the first digit, if yes, automatically focus on the next input field and so on.
      if (input.length === 1 && index < length - 1) {
        inputRef.current[index + 1]?.focus();
      }

      if (input.length === 0 && index > 0) {
        inputRef.current[index - 1]?.focus();
      }

      // if the user has entered all the digits, grab the digits and set as an argument to the onComplete function.
      if (newPin.every((digit) => digit !== "")) {
        // startTimer()
        // onComplete(newPin.join(""));
        onComplete({ otp: newPin.join("") })
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [length, onComplete, OTP]
  );

  const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault();
    const clipboardData = e.clipboardData.getData("text/plain");
    const pastedDigits = clipboardData.slice(0, length).split("");
    const newPin = [...OTP];

    for (let i = 0; i < pastedDigits.length; i++) {
      if (newPin.length > i) {
        newPin[i] = pastedDigits[i];
      }
    }

    setOTP(newPin);
    // onComplete(newPin.join(""));
    onComplete({ otp: newPin.join("") })
  };

  const startTimer = () => {
    setIsActive(true);
    setTimerFinished(true);
    setMinutes(5); // reset the minutes
    setSeconds(0); // reset the seconds
  };

  const tick = useCallback(() => {
    if (minutes === 0 && seconds === 0) {
      setIsActive(false);
      setTimerFinished(false);
    } else if (seconds === 0) {
      setMinutes((prevMinutes) => prevMinutes - 1);
      setSeconds(59);
    } else {
      setSeconds((prevSeconds) => prevSeconds - 1);
    }
  }, [minutes, seconds]);

  useEffect(() => {
    let timer: NodeJS.Timeout | null = null;
    if (isActive) {
      timer = setInterval(tick, 1000);
    }
    return () => {
      if (timer) clearInterval(timer);
    };
  }, [isActive, tick]);


  useEffect(() => {
    onResendOtp()
    setTimerFinished(true)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const onResendOtp = () => {
    startResendTimer()
    startTimer()
  }


  const context = useContext(Context);
  if (!context) {
    throw new Error('Context must be used within a ContextProvider');
  }

  const { isDark } = context;



  return (
    <div
      className={twMerge(
        `w-full"`,
        className
      )}
    >
      {isTimerFinished && ''}
      <div className="flex justify-between items-center w-full md:w-[75%] xl:max-w-[75%]" >
        <label className="input-lebel gmail">OTP <span className='text-red-500'>*</span></label>
        <span className="text-sm">{String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}</span>
      </div>
      <div className={`flex space-x-2 md:space-x-4 justify-start items-center pt-1 border-none ${errorMessage ? 'pb-0' : 'pb-0'}`}>
        {Array.from({ length }, (_, index) => (
          <input
            type="tenxt"
            name=""
            min={0}
            max={6}
            id={`otp-${index}`}
            key={index}
            className={`w-full md:w-[10%] py-2  bg-transparent border-[1px] rounded-md text-center outline-none  text-sm ${isDark ? 'border-[#333333]' : 'border-[#B5B5B5]'} `}
            placeholder="-"
            maxLength={1}
            value={OTP[index]}
            onChange={(e) => handleTextChange(e.target.value, index)}
            onPaste={handlePaste}
            // ref={(ref) => (inputRef.current[index] = ref as any)}
            autoComplete="off"
          />
        ))}

      </div>
      {errorMessage &&
        <div className="pb-4">
          <TextError>{errorMessage}</TextError>
        </div>
      }

      {/* isDisabled={isTimerFinished} */}
      <div className="flex items-center space-x-2 mt-2 mb-6">
        <Button type={BUTTON_TYPES.button} title="Resend OTP" className={`p-0 border-[0px] text-xs ${!isResendTimerFinished ? 'underline' : ''}`} isDisabled={isResendTimerFinished} onClick={() => {

          handleResendOtp();
          onResendOtp()
        }} />
        &nbsp;
        {isResendTimerFinished &&
          <p className="text-gray-400 ">({String(resendOtpMinutes).padStart(2, '0')}:{String(resendOtpSeconds).padStart(2, '0')})
          </p>}
      </div>
      <div className="form-btn-wrap">
        <button type="button" value="Send" className={`form-btn ${(isResendTimerFinished || OTP.join("").length <= 5) && 'cursor-not-allowed'}`}
          disabled={isResendTimerFinished || OTP.join("").length <= 5}
          onClick={() => onComplete({ otp: OTP.join("") })}
        >Verify</button>
      </div>


    </div>
  );
};

export default memo(OTPForm);







