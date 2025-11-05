import { EyeOffIcon, LockIcon, MailIcon } from "lucide-react";
import React from "react";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { Label } from "../../components/ui/label";

export const Frame = (): JSX.Element => {
  const socialButtons = [
    {
      icon: "https://www.google.com/favicon.ico",
      alt: "Google",
      bgColor: "bg-white",
    },
    {
      icon: "https://www.apple.com/favicon.ico",
      alt: "Apple",
      bgColor: "bg-black",
    },
    {
      icon: "https://www.facebook.com/favicon.ico",
      alt: "Facebook",
      bgColor: "bg-[#1877f2]",
    },
  ];

  return (
    <div className="flex flex-col items-center gap-6 px-[15px] py-6 min-h-screen bg-[#cde0e6]">
      <img
        className="w-[70px] h-[70px] object-cover"
        alt="Gemini generated"
        src="/gemini-generated-image-igk6mdigk6mdigk6-removebg-preview-1.png"
      />

      <h1 className="[font-family:'Inter',Helvetica] font-bold text-black text-4xl text-center tracking-[0] leading-[normal]">
        Login
      </h1>

      <div className="flex flex-col gap-0.5 w-full">
        <Label className="[font-family:'Inter',Helvetica] font-normal text-black text-base tracking-[0] leading-[normal]">
          Email
        </Label>

        <div className="flex h-10 items-center gap-3 px-2.5 bg-[#d9d9d9] rounded-[25px] overflow-hidden">
          <MailIcon className="w-6 h-6 text-black" />

          <Input
            type="email"
            placeholder="Email"
            className="flex-1 border-0 bg-transparent [font-family:'Inter',Helvetica] font-normal text-[#5f5c5c] text-base tracking-[0] leading-[normal] placeholder:opacity-30 focus-visible:ring-0 focus-visible:ring-offset-0 h-auto p-0"
          />
        </div>
      </div>

      <div className="flex flex-col gap-0.5 w-full">
        <Label className="[font-family:'Inter',Helvetica] font-normal text-black text-base tracking-[0] leading-[normal]">
          Password
        </Label>

        <div className="flex h-10 items-center justify-between px-2.5 bg-[#d9d9d9] rounded-[25px] overflow-hidden">
          <div className="flex items-center gap-3 flex-1">
            <LockIcon className="w-6 h-6 text-black" />

            <Input
              type="password"
              placeholder="Password"
              className="flex-1 border-0 bg-transparent [font-family:'Inter',Helvetica] font-normal text-[#5f5c5c] text-base tracking-[0] leading-[normal] placeholder:opacity-30 focus-visible:ring-0 focus-visible:ring-offset-0 h-auto p-0"
            />
          </div>

          <EyeOffIcon className="w-6 h-6 text-black cursor-pointer" />
        </div>
      </div>

      <div className="flex flex-col items-center justify-center gap-2.5 w-full">
        <Button className="w-[150px] h-10 bg-[#103359] hover:bg-[#103359]/90 rounded-[18px] shadow-[2px_4px_3.3px_#00000040]">
          <span className="[font-family:'Inter',Helvetica] font-normal text-white text-xs text-center tracking-[0] leading-[normal]">
            Login
          </span>
        </Button>
      </div>

      <div className="flex items-center justify-between px-[15px] w-full">
        <button className="[text-shadow:0px_4px_4px_#00000040] [font-family:'Inter',Helvetica] font-semibold text-black text-[10px] tracking-[0] leading-[normal]">
          Forgot your password?
        </button>

        <button className="[text-shadow:0px_4px_4px_#00000040] [font-family:'Inter',Helvetica] font-semibold text-black text-[10px] tracking-[0] leading-[normal] whitespace-nowrap">
          Create an account
        </button>
      </div>

      <p className="[font-family:'Inter',Helvetica] font-normal text-black text-[10px] text-center tracking-[0] leading-[normal]">
        Or login with
      </p>

      <div className="flex items-center gap-4 w-full justify-center">
        {socialButtons.map((social, index) => (
          <Button
            key={index}
            className={`w-[90px] h-10 ${social.bgColor} hover:opacity-90 rounded-[18px] shadow-[2px_4px_3.3px_#00000040] flex items-center justify-center`}
          >
            <img className="w-6 h-6" alt={social.alt} src={social.icon} />
          </Button>
        ))}
      </div>
    </div>
  );
};
