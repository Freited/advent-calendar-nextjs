import styleHeader from '../../styles/header.module.css'
import Link from 'next/link'

const calendarDay7 = () => {
    return (
    <div>
    <h2 className={styleHeader.boxColor}>Calendar Day 7</h2>
    <Link href='/calendar-home/calendar-home'><button className={styleHeader.backButton}>Back</button></Link>
    </div>
    )
}

export default calendarDay7