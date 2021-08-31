import headerStyle from '../styles/header.module.css'

const Header = () => {
    return (
        <div>
            <h1 className={headerStyle.title}>
                <span>HiQ</span> News
            </h1>
            <p className={headerStyle.description}>Keep up to date with your fevorite content creator</p>
        </div>
    )
}

export default Header