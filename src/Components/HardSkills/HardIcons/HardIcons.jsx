import React, { useState } from 'react';
import style from './HardIcons.module.scss';
import boardImg from '/assets/media/img/hardskills/board.png'
const HardIcons = () => {

    const [hoveredItem, setHoveredItem] = useState(null);

    const handleMouseEnter = (index) => {
      setHoveredItem(index);
    };
  
    const handleMouseLeave = () => {
      setHoveredItem(null);
    };
  
    const technologies = [
      ['HTML', '#f16529'],
      ['CSS', '#039be5'],
      ['SCSS', '#f06292'],
      ['JS', '#f7ca0f'],
      ['REACT', '#00d8ff'],
      ['REDUX', '#764abc'],
      ['GIT', '#f13c2e'],
      ['VITE', '#f649f4'],
      ['FIGMA', '#8edda8']
    ];
  
    const hardSkills = technologies.map(([name, color], index) => ({
      name,
      imgTech: `/assets/media/icons/hardskills/technologies/tech${name}.svg`,
      imgLight: `/assets/media/icons/hardskills/lights/light${name}.svg`,
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