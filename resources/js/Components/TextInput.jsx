import { forwardRef, useEffect, useRef } from 'react';

export default forwardRef(function TextInput({ type = 'text', className = '', isFocused = false, ...props }, ref) {
    const input = ref ? ref : useRef();

    useEffect(() => {
        if (isFocused) {
            input.current.focus();
        }
    }, []);

    return (
        <div className="flex flex-col items-start">
            <input
                {...props}
                type={type}
                className={
                    'border-lime-500  dark:bg-[#FDEFCE] dark:text-black focus:border-lime-100             focus:ring-lime-600  rounded-md shadow-sm ' +
                    className
                }
                ref={input}
            />
        </div>
    );
});


