import Link from 'next/link'
import Style from '../styles/style.module.css'

export default function Home() {
  return (   
    <>
    <div className='container boxColor'>
        <h1 className={Style.textColorPink}>Welcome to happy HiQ calendar</h1>
        <Link href='/calendar-home/calendar-home'>
          <a className={Style.textColorWhite}>Go to calendar</a>
        </Link>
    </div>
    </>
  );
};
