import React from 'react'
import style from './Home.module.scss'
import MemojiHome from '/assets/media/img/memoji/Home.png'
import FlashBackground from '../UI/FlashBackground/FlashBackground'
import NeonBackground from '../UI/neonBackground/NeonBackground'
import FlashBack from '/assets/media/gif/Home/flashback.gif'
const Home = () => {
  return (
    <div id='home' className={style.home}>
        
        <div className={style.home_content}>
            <div className={style.home_text}>
                <h3>Привет👋, Я</h3>
                <h1>{`Задорожный\nЭммануил`}</h1>
                <h2>FRONTEND REACT DEVELOPER</h2>
                <p>{`Я Frontend разработчик, с опытом создания и проектирования \nSPA/MPA React приложений, Web игр, лендингов, интернет магазинов`}</p>
                <button>Сотрудничество</button>
            </div>
            <img src={MemojiHome} alt=" " className={style.imgHome}/>
        </div>
        {/* <img src={FlashBack} className={style.flashback}/> */}
        {/* <FlashBackground /> */}
        <NeonBackground />
  </div>
  )
}

export default Home