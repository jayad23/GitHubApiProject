
import '../Styles/ReposCard.css'

const ReposCard = (props) => {
 
    const {name, link, owner, privateLight} = props
    return (
        <div className="repos-container">
            <div className="container-RepoImg">
                <img src="https://cdn3.iconfinder.com/data/icons/computers-programming/512/repository-512.png" alt="Repo Icon" />
            </div>
            <div className='repoInfo'>
                <h2>{name}</h2>
                <h3>Owner: {owner}</h3>
                <div className='private-container'>
                    <div className='privateTitle'>
                        <h5>{privateLight ? 'Private:' : 'Public:'}</h5>
                    </div>
                    <div className={privateLight ? "notPrivate-light" : "private-light"}>
                        <h1>.</h1>
                    </div>
                </div>
                <a href={link} target="_blank">Find out more here...</a>
            </div>
        </div>
    )
}

export default ReposCard
