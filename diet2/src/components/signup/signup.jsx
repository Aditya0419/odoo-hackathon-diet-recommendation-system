import './signup.css'
import SignupForm from './signupForm';
import Navbar from '../Navbar/Navbar';
import LoginShowcase from '../login/loginShowcase';

export default function Signup() {
    return (
        <>
            <Navbar />
            <div className="signupForm-cont">
                <LoginShowcase></LoginShowcase>
            <SignupForm />
            </div>
            
        </>

    );
}