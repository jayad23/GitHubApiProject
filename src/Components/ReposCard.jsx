import '../Styles/ReposCard.css'

const ReposCard = (props) => {
    const {name, owner, privateLight} = props

    const repoLink = `https://github.com/${owner}/${name}`

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
                    <div className={privateLight ? "private-light" : "public-light"}>
                        <h1>.</h1>
                    </div>
                </div>
                <a href={repoLink} target="_blank">More about this Repo.</a>
            </div>
        </div>
    )
}

export default ReposCard
