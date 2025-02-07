import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SignInProblemCard from '../Components/SignInProblemCard';

const SignIn = () => {
    const [inputFormat, setInputFormat] = useState('text');
    const [num, setNum] = useState('');
    const [askingText, setAskingText] = useState('Email or mobile number');
    const [prevNum, setPrevNum] = useState('');
    const [btnTxt, setBtnTxt] = useState('Continue');
    const [continued, setContinued] = useState(true);
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');

    const navigate = useNavigate();

    const handleContinue = () => {
        // Reset errors
        setEmailError('');
        setPasswordError('');

        if (continued) {
            if (num !== 'mist@gmail.com') {
                setEmailError('We cannot find an account with that email address or mobile number.');
                return;
            }
            setPrevNum(num);
            setNum('');
            setBtnTxt('Sign in');
            setInputFormat('password');
            setAskingText('Password');
            setContinued(false);
        } else {
            if (num !== 'wearemist') {
                setPasswordError('Your password is incorrect.');
                return;
            }
            navigate('/Homepage');
        }
    };

    const handleReset = () => {
        setInputFormat('text');
        setNum('');
        setPrevNum('');
        setBtnTxt('Continue');
        setAskingText('Email or mobile number');
        setContinued(true);
        setEmailError('');
        setPasswordError('');
    };

    return (
        <div className="h-screen flex flex-col items-center justify-center">
            
            <div  className="w-96">
                {/* Show error message if email is invalid */}
                {emailError && continued && <SignInProblemCard message={emailError} />}

                {/* Show error message if password is incorrect */}
                {passwordError && !continued && <SignInProblemCard message={passwordError} />}
            </div>
            
            <div className="w-96 border border-gray-300 rounded-lg p-6 shadow-md flex flex-col">
                <h1 className="text-4xl font-semibold mb-5">Sign in</h1>

                {!continued && (
                    <div className="flex justify-start space-x-1 items-center mb-2.5">
                        <h3 className="text-md">{prevNum}</h3>
                        <button onClick={handleReset} className=" text-cyan-700 text-sm hover:underline">
                            Change
                        </button>
                    </div>
                )}

                <div className="flex justify-between items-center mb-2">
                    <h3 className="font-bold">{askingText}</h3>
                    {!continued && (
                        <button className="text-cyan-700 text-sm hover:underline">
                            Forgot password?
                        </button>
                    )}
                </div>

                <input 
                    type={inputFormat} 
                    value={num} 
                    onChange={(e) => setNum(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-400 rounded-md mb-4"
                />

                <button 
                    onClick={handleContinue}
                    className="w-full bg-yellow-500 hover:bg-yellow-600 text-white py-2 rounded-md font-medium"
                >
                    {btnTxt}
                </button>

                {continued && (
                    <p className="text-xs text-gray-600 mt-4">
                        By continuing, you agree to our Conditions of Use and Privacy Notice.
                    </p>
                )}
            </div>
        </div>
    );
};

export default SignIn;
