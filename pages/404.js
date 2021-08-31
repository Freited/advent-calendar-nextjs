import styleHeader from '../styles/header.module.css'
import Link from 'next/link'

export default function Custom404() {
    return (
    <div>
        <h1 className={styleHeader.boxColor}>404 - Page Not Found</h1> 
        <Link href='/'>
        <button className={styleHeader.backButton}>Back</button>
        </Link>
    </div>)
  }