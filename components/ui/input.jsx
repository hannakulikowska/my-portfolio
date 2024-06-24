import * as React from "react"

import { cn } from "@/lib/utils"

const Input = React.forwardRef(({ className, type, ...props }, ref) => {
  return (
    <>
    <input
      type={type}
      className={cn(
        "flex h-[48px] rounded-md border border-white/10 focus:border-accent font-light bg-primary px-4 py-5 text-base placeholder:text-white/60 outline-none",
        className
      )}
      ref={ref}
      {...props} />
      <style jsx>{`
        input:-webkit-autofill,
        input:-webkit-autofill:hover,
        input:-webkit-autofill:focus,
        input:-webkit-autofill:active {
          -webkit-box-shadow: 0 0 0px 1000px #1c1c22 inset !important;
          box-shadow: 0 0 0px 1000px #1c1c22 inset !important;
          -webkit-text-fill-color: white !important;
          text-fill-color: white !important;
        }

        input:-internal-autofill-selected {
          background-color: #1c1c22 !important;
        }
      `}</style>
    </>
  );
})
Input.displayName = "Input"

export { Input }
