import React from 'react';
import style from './Contacts.module.scss';
import hillsImg from '/assets/media/img/contacts/hills.jpg'
import cosmonaut from '/assets/media/img/contacts/back/cosmonaut.png'
import jupiter from '/assets/media/img/contacts/back/jupiter.png'
import meteor from '/assets/media/img/contacts/back/meteor.png'
import meteorFire from '/assets/media/img/contacts/back/meteorFire.png'
import nlo from '/assets/media/img/contacts/back/nlo.png'
import saturn from '/assets/media/img/contacts/back/saturn.png'
import appleman from '/assets/media/img/contacts/appleman.png'

import dc from '/assets/media/icons/contacts/dc.svg'
import gh from '/assets/media/icons/contacts/gh.svg'
import inst from '/assets/media/icons/contacts/inst.svg'
import ln from '/assets/media/icons/contacts/ln.svg'
import tg from '/assets/media/icons/contacts/tg.svg'


const Contacts = () => {
    const cosmoImgs = [
        {name: 'cosmonaut', img: cosmonaut},
        {name: 'jupiter', img: jupiter},
        {name: 'meteor1', img: meteorFire},
        {name: 'meteor2', img: meteorFire},
        {name: 'meteor3', img: meteorFire},
        {name: 'meteor', img: meteor},
        {name: 'nlo', img: nlo},
        {name: 'saturn', img: saturn},
    ];
    const icons = [
        {link: 'http://www.t.me/liunamme', img: tg},
        {link: 'https://www.github.com/Liunamme', img: gh},
        {link: 'https://discordapp.com/users/312291477864841216/', img: dc},
        {link: 'https://ru.linkedin.com/in/%D1%8D%D0%BC%D0%BC%D0%B0%D0%BD%D1%83%D0%B8%D0%BB-%D0%B7%D0%B0%D0%B4%D0%BE%D1%80%D0%BE%D0%B6%D0%BD%D1%8B%D0%B9-55a7a3231', img: ln},
        {link: 'http://www.instagram.com/liunamme', img: inst},]
    return (
        <div id='contacts' className={style.contacts}>
            <div className={style.spaceGif}></div>
            <div className={style.cosmoImgs}>
                {cosmoImgs.map(item => (
                    <img src={item.img} className={style[item.name]} key={item.name} />
                ))}
            </div>
            <div className={style.spaceImg}></div>
            <div className={style.appleman}>
                <img src={appleman} alt="" />
                <p data="КОНТАКТЫ">КОНТАКТЫ</p>
            </div>
            <div className={style.contactsInfo}>
                    <div className={style.contactsInfo_socials}>
                        <div className={style.contactsInfo_icons}>
                            {icons.map((item, index) => (
                               <a key={index} href={item.link}target='_blank'><img src={item.img}/></a> 
                            ))}
                        </div>
                        <div className={style.contactsInfo_line}></div>
                        <p className={style.contactsInfo_text}>SOCIALS</p>
                    </div>
                    <div className={style.contactsInfo_emailBlock}>
                        <a className={style.contactsInfo_email} href="mailto:liunamme.web@gmail.com">liunamme.web@gmail.com</a>
                        <div className={style.contactsInfo_line}></div>
                        <p className={style.contactsInfo_text}>E-MAIL</p>
                    </div>
            </div>
            <img src={hillsImg} alt="" className={style.hillsImg}/>
        </div>
    );
}

export default Contacts;