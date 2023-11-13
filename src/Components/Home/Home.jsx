import React from 'react'
import style from './Home.module.scss'
import MemojiHome from '/assets/media/img/memoji/Home.png'
import NeonBackground from '../UI/neonBackground/NeonBackground'
const Home = () => {
  return (
    <div id='home' className={style.home}>
        
        <div className={style.home_content}>
            <div className={style.home_text}>
                <h3>Привет👋, Я</h3>
                <h1>{`Задорожный\nЭммануил`}</h1>
                <h2>FRONTEND REACT DEVELOPER</h2>
                <p>{`Я Frontend разработчик, с опытом создания и проектирования \nSPA/MPA React приложений, Web игр, лендингов, интернет магазинов`}</p>
                <a className={style.btn}>Сотрудничество</a>
            </div>
            <img src={MemojiHome} alt=" " className={style.imgHome}/>
        </div>
        <NeonBackground />
  </div>
  )
}

export default Home