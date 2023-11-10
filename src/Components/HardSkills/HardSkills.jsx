import React from 'react';
import style from './HardSkills.module.scss';
import HardIcons from './HardIcons/HardIcons';
import Floor from '../UI/Floor/Floor';
import appleman from '/assets/media/img/hardskills/appleman.png';

const HardSkills = () => {
    return (
        <div id='hardskills' className={style.hardSkills}>
            <HardIcons/>
            <div className={style.appleman}>
                <img src={appleman} alt="" />
                <p>НАВЫКИ</p>
            </div>
            <Floor/>
        </div>
    );
}

export default HardSkills;