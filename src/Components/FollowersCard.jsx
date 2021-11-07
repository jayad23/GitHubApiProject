import { Link } from 'react-router-dom';
import '../Styles/FollowersCard.css'

const FollowersCard = ({userName, image}) => {
    return (
        <div className="container-followers">
            <div className="image">
                <img src={image} alt={`Image of ${userName}`} />
            </div>
            <div className="name">
                <h4>{userName}</h4>
            </div>
            <div className="button">
                <Link to={`/users/${userName}`}><button>More...</button></Link>
            </div>
        </div>
    )
}

export default FollowersCard
