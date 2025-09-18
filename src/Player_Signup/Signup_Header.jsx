import PersonIcon from '@mui/icons-material/Person';
import './Signup_Header.css';

export default function Signup_Header(){
    return(
        <>
            <div className="icon-circle">
                <PersonIcon className="person-icon" />
            </div>
            <h2 className="signup-heading">Join as Player</h2>
            <p>Create your athlete profile and unlock AI-powered training insights</p>
        </>
    )
}