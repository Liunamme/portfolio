import React from 'react';
import style from './About.module.scss';
import appleman from '/assets/media/img/about/appleman.png'
import light from '/assets/media/img/about/light.png'
import caseimg from '/assets/media/img/about/case.png'
import wire from '/assets/media/img/about/wire.png'

const About = () => {
    return (
        <div id='about' className={style.about}>
            <div className={style.appleman}>
                <img src={caseimg} alt="" className={style.appleman_caseimg}/>
                <img src={light} alt="" className={style.appleman_light}/>
                <img src={appleman} alt="" className={style.appleman_man}/>
                <p>ОБО МНЕ</p>
            </div>  
            <div className={style.speach}>
                <p>Я - разработчик с богатым опытом в создании разнообразных веб-проектов, включая лендинги, интернет-магазины и веб-игры. 
Моя страсть к веб-разработке проявляется в способности превращать креативные концепции в интерактивные и пользовательски дружелюбные решения.</p>
            </div>
            <img src={wire} alt="" className={style.wire}/>
        </div>
    );
}

export default About;