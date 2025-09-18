import { useNavigate } from "react-router-dom";
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import SportsSoccerIcon from '@mui/icons-material/SportsSoccer';
import StarIcon from '@mui/icons-material/Star';
import WorkIcon from '@mui/icons-material/Work';
import FlagIcon from '@mui/icons-material/Flag';
import './Credentials.css';

export default function Credentials() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault(); // prevent page refresh
    // ✅ here you can later add validation / API call to save profile
    navigate("/"); // redirect to login page
  };

  return (
    <form className="credentials-form" onSubmit={handleSubmit}>
      <div className="credentials-row">
        <div className="credentials-field half-width">
          <label className="credentials-label">
            <PersonIcon className="credentials-icon" /> Full Name
          </label>
          <input type="text" placeholder="Enter your full name" className="credentials-input" />
        </div>
        <div className="credentials-field half-width">
          <label className="credentials-label">
            <EmailIcon className="credentials-icon" /> Email
          </label>
          <input type="email" placeholder="Enter your email" className="credentials-input" />
        </div>
      </div>

      <div className="credentials-row">
        <div className="credentials-field half-width">
          <label className="credentials-label">
            <CalendarMonthIcon className="credentials-icon" /> Age
          </label>
          <input type="number" placeholder="Enter your age" className="credentials-input" min="1" max="150" />
        </div>
        <div className="credentials-field half-width">
          <label className="credentials-label">
            <SportsSoccerIcon className="credentials-icon" /> Primary Sport
          </label>
          <select className="credentials-input">
            <option value="">Select your sport</option>
            <option value="football">Football</option>
            <option value="cricket">Cricket</option>
            <option value="basketball">Basketball</option>
            <option value="tennis">Tennis</option>
            <option value="swimming">Swimming</option>
          </select>
        </div>
      </div>

      <div className="credentials-field half-width">
          <label className="credentials-label">
             Gender
          </label>
          <select className="credentials-input">
            <option value="">Select your Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>

      <div className="credentials-field">
        <label className="credentials-label">
          <StarIcon className="credentials-icon" /> Speciality
        </label>
        <input type="text" placeholder="e.g., Point Guard, Striker" className="credentials-input" />
      </div>

      <div className="credentials-field">
        <label className="credentials-label">
          <WorkIcon className="credentials-icon" /> Experience
        </label>
        <select className="credentials-input">
          <option value="">Select experience</option>
          <option value="beginner">Beginner (1-2 yrs)</option>
          <option value="intermediate">Intermediate (3-5 yrs)</option>
          <option value="advanced">Advanced (6+ yrs)</option>
        </select>
      </div>

      <div className="credentials-field full-width">
        <label className="credentials-label">
          <FlagIcon className="credentials-icon" /> Training Goals
        </label>
        <input type="text" placeholder="e.g., Improve speed, Build strength, Get recruited" className="credentials-input" />
      </div>

      <button type="submit" className="create-btn">Create Player Profile</button>
    </form>
  );
}
