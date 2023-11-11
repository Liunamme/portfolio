import React, { useState, useEffect } from "react";
import style from './Nav.module.scss';
import "intersection-observer";
// import { ReactComponent as HomeIcon } from '/public/assets/media/icons/navbar/home.svg';
// import { ReactComponent as AboutIcon } from '/public/assets/media/icons/navbar/about.svg';
// import { ReactComponent as HardskillsIcon } from '/public/assets/media/icons/navbar/hardskills.svg';
// import { ReactComponent as PortfolioIcon } from '/public/assets/media/icons/navbar/portfolio.svg';
// import { ReactComponent as Contacts } from '/public/assets/media/icons/navbar/contacts.svg';

function Nav( {toggle} ) {
  const [currentId, setCurrentId] = useState("");
  const navLinks = [
    {
      id: 'home',
      text: 'Главная',
      icon: HomeIcon,
    },
    {
      id: 'about',
      text: 'Обо мне',
      icon: AboutIcon,
    },
    {
      id: 'hardskills',
      text: 'Навыки',
      icon: HardskillsIcon,
    },
    {
      id: 'portfolio',
      text: 'Портфолио',
      icon: PortfolioIcon,
    },
    {
      id: 'contacts',
      text: 'Контакты',
      icon: Contacts,
    },
  ]
  const handleLinkClick = (event) => {
    if (!toggle) {
      event.preventDefault(); // Предотвращаем действие по умолчанию (переход по ссылке)
    }
  };
  useEffect(() => {
    const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setCurrentId(entry.target.id);
            }
          });
        },
        { threshold: 0.8 } // Процент обьекта, который должен быть виден для срабатывания кода
      );

    const sections = document.querySelectorAll("div[id]");

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  useEffect(() => {
    console.log(currentId);
  }, [currentId]);
    
    
  return (
    <nav>
        <ul>
          {navLinks.map(item => (
            <li key={item.id}>
              <a href={`#${item.id}`} onClick={handleLinkClick} className={currentId === item.id ? style.active : ""}>
              {item.icon && <item.icon className={`${style.icons} ${currentId === item.id ? style.active : ""}`} />}
                {item.text}
              </a>
            </li>
          ))}
        </ul>
    </nav>
  );
}

export default Nav;