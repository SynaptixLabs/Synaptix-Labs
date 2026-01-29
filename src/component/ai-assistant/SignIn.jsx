import React from "react";

const SignIn = () => {
    const handleSignIn = () => {
        // Logic for sign-in action
     
    };

    return (
        <button
            onClick={handleSignIn} className={'flex items-center justify-center gap-[7px] p-[15px] rounded-[10px] bg-[#233943]'} >
            <p className={'text-xl font-normal text-white'}>
                Sign in
            </p>
            <img src="./assets/ai-chat/Users.svg" alt="User" />
        </button>
    );
};

export default SignIn;
