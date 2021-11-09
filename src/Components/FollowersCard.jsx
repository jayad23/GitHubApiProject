import { Link } from 'react-router-dom';
import '../Styles/FollowersCard.css'

const FollowersCard = ({userName, image}) => {
    return (
        <div className="container-followers">
                <img src={image} alt={`Avatar of ${userName}`} />
                <h4>{userName}</h4>
                <Link to={`/users/${userName}`}><button>More...</button></Link>
           
        </div>
    )
}

export default FollowersCard
