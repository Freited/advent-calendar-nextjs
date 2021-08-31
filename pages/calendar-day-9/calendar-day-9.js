import styleHeader from '../../styles/header.module.css'
import Link from 'next/link'

const calendarDay9 = () => {
    return (
    <div>
    <h2 className={styleHeader.boxColor}>Calendar Day 9</h2>
    <Link href='/calendar-home/calendar-home'><button className={styleHeader.backButton}>Back</button></Link>
    </div>
    )
}

export default calendarDay9