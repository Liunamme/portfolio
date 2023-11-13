import React, { useState } from 'react';
import style from './HardIcons.module.scss';

import boardImg from '/assets/media/img/hardskills/board.png'

import imgTechHTML from '/assets/media/icons/hardskills/technologies/techHTML.svg';
import imgLightHTML from '/assets/media/icons/hardskills/lights/lightHTML.svg';

import imgTechCSS from '/assets/media/icons/hardskills/technologies/techCSS.svg';
import imgLightCSS from '/assets/media/icons/hardskills/lights/lightCSS.svg';

import imgTechSCSS from '/assets/media/icons/hardskills/technologies/techSCSS.svg';
import imgLightSCSS from '/assets/media/icons/hardskills/lights/lightSCSS.svg';

import imgTechJS from '/assets/media/icons/hardskills/technologies/techJS.svg';
import imgLightJS from '/assets/media/icons/hardskills/lights/lightJS.svg';

import imgTechREACT from '/assets/media/icons/hardskills/technologies/techREACT.svg';
import imgLightREACT from '/assets/media/icons/hardskills/lights/lightREACT.svg';

import imgTechREDUX from '/assets/media/icons/hardskills/technologies/techREDUX.svg';
import imgLightREDUX from '/assets/media/icons/hardskills/lights/lightREDUX.svg';

import imgTechGIT from '/assets/media/icons/hardskills/technologies/techGIT.svg';
import imgLightGIT from '/assets/media/icons/hardskills/lights/lightGIT.svg';

import imgTechVITE from '/assets/media/icons/hardskills/technologies/techVITE.svg';
import imgLightVITE from '/assets/media/icons/hardskills/lights/lightVITE.svg';

import imgTechFIGMA from '/assets/media/icons/hardskills/technologies/techFIGMA.svg';
import imgLightFIGMA from '/assets/media/icons/hardskills/lights/lightFIGMA.svg';

const HardIcons = () => {

    const [hoveredItem, setHoveredItem] = useState(null);

    const handleMouseEnter = (index) => {
      setHoveredItem(index);
    };
  
    const handleMouseLeave = () => {
      setHoveredItem(null);
    };
  
    const technologies = [
      ['HTML', imgTechHTML, imgLightHTML, '#f16529'],
      ['CSS', imgTechCSS, imgLightCSS, '#039be5'],
      ['SCSS', imgTechSCSS, imgLightSCSS, '#f06292'],
      ['JS', imgTechJS, imgLightJS, '#f7ca0f'],
      ['REACT', imgTechREACT, imgLightREACT, '#00d8ff'],
      ['REDUX', imgTechREDUX, imgLightREDUX, '#764abc'],
      ['GIT', imgTechGIT, imgLightGIT, '#f13c2e'],
      ['VITE', imgTechVITE, imgLightVITE, '#f649f4'],
      ['FIGMA', imgTechFIGMA, imgLightFIGMA, '#8edda8']
    ];
  
    const hardSkills = technologies.map(([name, tech, light, color], index) => ({
      name,
      tech,
      light,
      imgTech: tech,
      imgLight: light,
      color,
      color,
      index,
    }));

    return (
        <div className={style.hardIcons}>
            <div className={style.boards}>
                <img src={boardImg} alt="" className={style.board}/>
                <img src={boardImg} alt="" className={style.board}/>
                <img src={boardImg} alt="" className={style.board}/>
            </div>
         <div className={style.icons}>
         {hardSkills.map((item) => (
          <div className={style.iconTest} key={item.index} onMouseEnter={() => handleMouseEnter(item.index)} onMouseLeave={handleMouseLeave}>
            <img className={style.tech} src={item.imgTech} alt=" " />
            <img className={style.light} src={item.imgLight} alt=" " />
            <p
              style={{
                color: `#fff`,
                textShadow: hoveredItem === item.index
                  ? `0 0 10px ${item.color}, 0 0 20px ${item.color}, 0 0 30px ${item.color}`
                  : 'none',
                transition: 'all 0.3s ease-in-out',
              }}
            >
              {item.name}
            </p>
          </div>
        ))}
        </div>   
        <div className={style.codeWars}>
                <p>Codewars</p><a href="https://www.codewars.com/users/Liunamme/" target='_blank'><img src="https://www.codewars.com/users/Liunamme/badges/large" alt="CodeWars Liunamme" /></a>
        </div>
    </div>
    );
}

export default HardIcons;