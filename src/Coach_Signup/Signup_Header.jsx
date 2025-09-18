import PeopleIcon from '@mui/icons-material/People';
import './Signup_Header.css';

export default function Signup_Header(){
    return(
        <>
            <div className="icon-circle">
                <PeopleIcon className="person-icon" />
            </div>
            <h2 className="signup-heading">Join as Coach</h2>
            <p>Build your coaching profile and connect with talented athletes</p>
        </>
    )
}