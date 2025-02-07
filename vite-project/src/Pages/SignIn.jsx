import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const SignIn = () => {
    const [inputFormat, setInputFormat] = useState('text') // input type
    const [num, setNum] = useState('') // input value

    const [prevNum, setPrevNum] = useState('') // confirmed email

    const [btnTxt, setBtnTxt] = useState('Continue') // button text
    const [continued, setContinued] = useState(true) // continue button and appearance
    
    const navigate = useNavigate()

    const handleContinue = () => {
        if (continued && num==='mist@gmail.com') {
            setPrevNum(num) // Set the email to num
            setNum('') // Clear the input field
            setBtnTxt('Sign in') // Change the button text
            setInputFormat('password') // Change the input type to password
            setContinued(false) // Set the continued state to false
        }
        else if (continued) {
            alert('Please enter a valid email address!');
        }
        if (!continued && num==='wearemist') {
            navigate('/Homepage')
        }
    }

    return (
        <div>
            <h1 >Sign in</h1>
            {!continued && <h3>{prevNum}</h3>} {/* Display previous number */}
            <h3><b>Email or mobile number</b></h3>
            <input 
                type={inputFormat} 
                value={num} 
                onChange={(e) => setNum(e.target.value)} // Handle input changes
            />
            <button onClick={handleContinue}>{btnTxt}</button> {/* Button text changes based on state */}
            {continued && <p>By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.</p>} {/* Show the conditions */}
        </div>
    )
}

export default SignIn
