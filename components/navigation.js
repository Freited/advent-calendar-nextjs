import navStyle from '../styles/nav.module.css'
import Link from 'next/link'

const Navigation = () => {
    return (
        <nav className={navStyle.nav}>
            <ul>
                <li>
                <Link href='/'>Welcome page</Link>
                </li>
                <li>
                <Link href='https://hiq.fi/'>Back to HiQ</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navigation