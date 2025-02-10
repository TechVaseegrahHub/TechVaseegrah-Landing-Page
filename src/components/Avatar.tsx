import { HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";
export default function Avatar(props: HTMLAttributes<HTMLDivElement>){
   
    const {className, children, ...otherProps}= props;
    return(
        <div className={twMerge(
           "size-40 overflow-hidden p-1 flex items-center justify-center ", 
        className
        )}
        {...otherProps}
        >
            {children}
        </div>

    );
}