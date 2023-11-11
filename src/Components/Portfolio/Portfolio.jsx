import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import style from './Portfolio.module.scss';
import appleman from '/assets/media/img/memoji/Projects.png'

import cardMLpng from '/assets/media/img/portfolio/MafiaLegacy/cardML.png'
import cardMLgif from '/assets/media/gif/Portfolio/MafiaLegacy/cardML.gif'
import backgroundMLgif from '/assets/media/gif/Portfolio/MafiaLegacy/background1.gif'
import autorizationML from '/assets/media/img/portfolio/MafiaLegacy/autorization.png'
import gameParametresML from '/assets/media/img/portfolio/MafiaLegacy/gameParametres.png'
import controlPanelML from '/assets/media/img/portfolio/MafiaLegacy/controlPanel.png'
import resultGameML from '/assets/media/img/portfolio/MafiaLegacy/resultGame.png'
import customML from '/assets/media/img/portfolio/MafiaLegacy/custom.png'

import cardBWpng from '/assets/media/img/portfolio/BlackWall/cardBW.png'
import cardBWgif from '/assets/media/gif/Portfolio/BlackWall/cardBW.gif'
import backgroundBWgif from '/assets/media/gif/Portfolio/BlackWall/background.gif'


import cardEGpng from '/assets/media/img/portfolio/EnglishGuru/cardEG.png'
import cardEGgif from '/assets/media/gif/Portfolio/EnglishGuru/cardEG.gif'
import backgroundEGgif from '/assets/media/gif/Portfolio/EnglishGuru/background.gif'
import parametresEG from '/assets/media/img/portfolio/EnglishGuru/parametres.png'
import testEG from '/assets/media/img/portfolio/EnglishGuru/test.png'
import resultsEG from '/assets/media/img/portfolio/EnglishGuru/results.png'


const Portfolio = () => {
  const [currentProject, setCurrentProject] = useState(null)
  const [currentSection, setCurrentSection] = useState(null)

  const projects = [
    {
      name: 'Mafia Legacy',
      link: 'https://liunamme.github.io/MafiaLegacy/',
      card: {
        img: cardMLpng,
        gif: cardMLgif,
      },
      sections: [
        {
          header: 'Mafia Legacy',
          text: [
            'Мой пет-проект представляет собой SPA React приложение, предназначенное для организации игры "Мафия". Это приложение активно используется различными дискорд серверами для проведения городской мафии. Кроме того, к моему приложению написан Discord бот, который позволяет также проводить игру на платформе Discord. Игроки могут использовать приложение как самостоятельно, так и совместно с ботом.',
            'В процессе разработки этого пет-проекта, я освоил множество технологий React. В приложении применены различные React хуки, реализовано управление состоянием, применен компонентный подход разработки, работа с данными, кастомизация внешнего вида и функционала приложения. Также реализована авторизация пользователей, хотя она ограничена возможностями отсутствия backend-части.',
          ],
          img: backgroundMLgif,
        },
        {
          header: 'Авторизация',
          text: [
            'Чтобы получить доступ к приложению, и проводить игры через него - Вам нужно получить его у меня, связавшись через любой из указанных мессенджеров',
            'Также есть демо-аккаунт, чтобы вы могли посмотреть приложение (P.s запрещается проводить игры через демо-аккаунт на постоянной основе, он предоставлен для ознакомления!)',
            'Демо аккаунт: Логин - "Demo"; Пароль - "Demo"'
          ],
          img: autorizationML,
        },
        {
          header: 'Параметры игры',
          text: [
            'Вы можете настраивать параметры игры, выбирать количество игроков, указывать количество фолов, включать режим +30, в котором игрок имеет право за игру взять +30 секунд к своей речи, а также включать запрет на использование ненормативной лексики',
            'Когда вы укажите параметры игры, у вас появится окошко с рандомайзером ролей/слотов, после зандома - вы отправляете игрокам их роли',
            'Также есть функция автоматизации игры через бота (если он согласован и может работать с этим приложением). Бот самостоятельно указывает количество игроков, распределяет и рассылает роли',
          ],
          img: gameParametresML,
        },
        {
          header: 'Панель управления',
          text: [
            `Интерфейс:`,
            `Таймер - используется для контроля времени на речи игрока (Кнопки play/pause, reset);`,
            `Табло выставленных игроков - отображает игроков, выставленных на голосование (Кнопка очистить - отчищает табло);`,
            `Панель управления игроками - основная панель, через которую можно управлять игроками:
            ● Выставление - нужно нажать на кнопку с номером/ником игрока, и тогда он отобразится на 'Табло выставленных игроков'
            ● Фолы - (Кнопки 1,2,3,4...) предназначены для того, чтобы выдать игроку фол, за выкрик или нарушения правил. Если достигнуто максимальное кол-во фолов - игрок автоматически кикается;
            ● +30 - если вы включили их в настройках, то игрок сможет брать +30 секунд на своей речи, и как только он их берет - вы нажимаете на кнопку, которая означает, что игрок использовал +30 секунд на своей речи;
            ● Кик игрока - (Кнопка X) предназначена для того, чтобы кикнуть игрока, если его убили, проголосовали за него, или он нарушил правила (При нажатии на кнопку - будет выбор причины кика).`,
            `Боковая панель - на ней находится дополнительная информация по игре, а также кнопка завершить игру:
            ● Таймер игры - таймер показывает сколько времени длится данная игра;
            ● Правила игры - отображены правила на игру, за что поднимают со стола, а за что выдают фолы;
            ● Роли на столе - отображает роли, которые есть в данной игре (Есть кнопка 'описание' - нажав на которую всплывет окно, с описанием каждой роли);
            ● Кнопка завершить игру - завершает данную игру, и переводит к результатам игры (После нажатия на кнопку - будет предложен выбор победителя.)`,
            `Тема - кнопка, по нажатию которой появится возможность выбрать тему интерфейса, а также отключить эффекты(если слабый пк, или неприятно для глаз);`,
            `Никнейм ведущего - отображает никнейм авторизованного ведущего (P.s сделано, чтобы люди не давали свои аккаунты другим - за это я заберу доступ к аккаунту), по нажатию на никнейм - можно выйти из аккаунта`,  
            ],
          img: controlPanelML,
        },
        {
          header: 'Результаты игры',
          text: [
            `Интерфейс:`,
            `Первая панель - идентична боковой панели в на панели управления, но из отличий - пишется победитель игры и кнопка 'завершить игру' - заменена на кнопку 'новая игра', которая переносит нас на настройку новой игры;`,
            `Вторая панель - отображают историю игры (кого когда кикнули и по какой причине и его роль), а также время сколько длилась игра;`,
            `Третья панель - отображает игровые данные: Ники/номера игроков, роли, фолы, использованы ли +30(при включении) и стостояние игрока на конец игры. Также дату, когда была проведена игра.`,
          ],
          img: resultGameML,
        },
        {
          header: 'Кастомизация',
          text: [
            `По умолчанию у Вас стоит тема, которую вы попросите сделать основной при регистрации аккаунта`,
            `Вы можете выбрать тему из множества предложенных на выбор`,
            `Вы можете отключить эффекты, если у вас слабый пк, или они вам не нравятся`,
          ],
          img: customML,
        },
      ]
    },
    {
      name: 'Black Wall',
      link: 'https://liunamme.github.io/BlackWall/',
      card: {
        img: cardBWpng,
        gif: cardBWgif,
      },
      sections: [
        {
          header: 'Black Wall',
          text: [
            `Вёрстка имиджевого сайта криптовалютного проекта 'BlackWall'`
          ],
          img: backgroundBWgif,
        }
      ]
    },
    {
      name: 'English Guru',
      link: 'https://liunamme.github.io/EnglishGuru/',
      card: {
        img: cardEGpng,
        gif: cardEGgif,
      },
      sections: [
        {
          header: 'English Guru',
          text: [
            'EnglishGuru - это удобное приложение, предназначенное для тестирования ваших знаний английских слов. Оно позволяет вам эффективно учить и повторять слова, а также оценивать свой прогрес',
            `● EnglishGuru поможет вам повторить и выучить новые слова из выбранного списка;`,
            `● Создайте собственный список слов для изучения или выберите готовый список;`,
            `● Начните тестирование, отвечая на вопросы и записывая переводы;`,
            `● После теста вы можете проанализировать свои ошибки и изучить правильные ответы, чтобы улучшить свои знания английского языка.`,
            `Учите английский с EnglishGuru и улучшайте свои навыки в изучении иностранных слов!`,
          ],
          img: backgroundEGgif,
        },
        {
          header: 'Настройка теста',
          text: [
            `EnglishGuru - это удобное приложение, предназначенное для тестирования ваших знаний английских слов. Оно позволяет вам эффективно учить и повторять слова, а также оценивать свой прогрес`,
            `Загрузка из Excel:
              ● Вы можете загрузить список слов из Excel, где первый столбец содержит английские слова, второй столбец - русские переводы, и третий столбец (опционально) - описание слова;
              ● Пример синтаксиса в ячейках: '[eng,eng] [rus,rus] [description]';
              ● Примеры:
                ・[go,walk] [идти]
                ・[depict] [изображать, описывать]
                ・[ring] [звонить, звонок] [у двери, школьный]
            `,
            `Загрузка из текстового поля:
              ● Вы можете вводить слова в текстовое поле, соблюдая определенный синтаксис;
              ● Пример синтаксиса в текстовом поле: 'eng,eng - rus,rus(description);';
              ● Примеры:
                ・ go,walk - идти;
                ・ depict - изображать, описывать;
                ・ ring - звонить, звонок(у двери, школьный);
            `,
            `Выбор языка тестирования:
              ● Выберите направление тестирования (с английского на русский или с русского на английский);
              ● Если выбрать американский флаг, вы будете видеть английские слова и писать русские переводы.
              `,
              `Начало теста:
              ● После настройки нажмите кнопку 'Начать тест'.
            `,

          ],
          img: parametresEG,
        },
        {
          header: 'Прохождение теста',
          text: [
            `Интерфейс теста:
            ● Поле с цифрами (зеленые, белые, красные) указывает количество слов в разных категориях: 
              ・Зеленые - правильные ответы;
              ・Белые - количество оставшихся слов;
              ・Красные - неправильные ответы;
            ● Поле со словами отображает слова для перевода (на английском или русском, в зависимости от выбранных настроек);
            ● Поле ввода предназначено для записи переводов (нажмите Enter, чтобы ответить; Ctrl, чтобы пропустить слово);
            ● Кнопки:
              ・Желтая кнопка 'Пропустить слово' позволяет пропустить текущее слово (оно переместится в конец списка);
              ・Зеленая кнопка 'Ответить' оценивает ваш ответ и обновляет счетчики слов;
              ・Кнопка 'Завершить тест' завершает тестирование и выводит результаты;
              `,
          ],
          img: testEG,
        },
        {
          header: 'Результаты теста',
          text: [
            `
            ● В поле 'Результаты теста' вы найдете информацию о количестве общих слов, правильных и неправильных ответов;
            ● Если у вас нет ошибок, вы увидите поздравление;
            ● Если есть ошибки, будет выведена таблица с информацией:
              ・Слово (вопрос);
              ・Правильный ответ;
              ・Ваш ответ (красным цветом);
            `,
          ],
          img: resultsEG,
        },
      ]
    },
  ];

  const Card = styled.div`
  background-image: url(${props => props.image});
  &:hover {
    background-image: ${props => (props.gif ? `url(${props.gif})` : `url(${props.image})`)};
  }
`;

useEffect(() => {
  setCurrentProject(prev => prev = projects[0])
  setCurrentSection(prev => prev = projects[0].sections[0])
},[])
  const clickCard = (item) => {
    setCurrentProject(prev => prev = item)
    setCurrentSection(prev => prev = item.sections[0])
  }

  const clickCardPrev = () => {
    if (currentProject) {
      const currentIndex = projects.findIndex(project => project.name === currentProject.name);
      const newIndex = (currentIndex - 1 + projects.length) % projects.length;
      setCurrentProject(projects[newIndex]);
      setCurrentSection(projects[newIndex].sections[0]);
    }
  };
  
  const clickCardNext = () => {
    if (currentProject) {
      const currentIndex = projects.findIndex(project => project.name === currentProject.name);
      const newIndex = (currentIndex + 1) % projects.length;
      setCurrentProject(projects[newIndex]);
      setCurrentSection(projects[newIndex].sections[0]);
    }
  };
  

  const clickSections = (item) => {
    setCurrentSection(prev => prev = item)
  }

  const clickSectionsPrev = () => {
    if (currentProject && currentSection) {
      const currentIndex = currentProject.sections.indexOf(currentSection);
      const newIndex = (currentIndex - 1 + currentProject.sections.length) % currentProject.sections.length;
      setCurrentSection(currentProject.sections[newIndex]);
    }
  };
  
  const clickSectionsNext = () => {
    if (currentProject && currentSection) {
      const currentIndex = currentProject.sections.indexOf(currentSection);
      const newIndex = (currentIndex + 1) % currentProject.sections.length;
      setCurrentSection(currentProject.sections[newIndex]);
    }
  };

  useEffect(() => {
    console.log(currentProject)
  }
    ,[currentProject])

    useEffect(() => {
      console.log(currentSection)
    }
      ,[currentSection])

  return (
    <div id="portfolio" className={style.portfolio}>
      <div className={style.appleman}>
        <img src={appleman} alt="" />
        <h1 className={style.header}>Портфолио</h1>
      </div>
      <div className={style.projects}>
        <div className={style.projects_sections}>
        <nav className={style.projects_sections_nav}>
        <ul>
          {currentSection && <li onClick={clickSectionsPrev}>{`<`}</li>}
          
          {currentProject &&
            currentProject.sections.map((item, index) => (
              <li key={index} onClick={() => clickSections(item)}>
                {item.header}
              </li>
            ))}
          {currentSection && <li onClick={clickSectionsNext}>{`>`}</li>}
        </ul>
        </nav>
            <div className={style.projects_sections_section}>
              {currentSection?.img && <img src={currentSection.img} alt="" className={style.projects_sections_section_background}/>}
              <div className={style.projects_sections_section_content}>
                <h1>{currentSection?.header}</h1>
                <div className={style.projects_sections_section_content_text}>
                  {currentSection?.text.map((item, index) => (
                    <p key={index}>{item}</p>
                  ))}
                </div>
              </div>
            </div>
        </div>
        <div className={style.projects_cards}>
        {projects && <button className={style.projects_cards_switch} onClick={clickCardPrev}>{`<`}</button>}
        {projects.map((item, index) => (
              <Card className={style.projects_cards_card} onClick={() => clickCard(item)} image={item.card.img} gif={item.card.gif} key={index}></Card>
        ))}
        {projects && <button className={style.projects_cards_switch} onClick={clickCardNext}>{`>`}</button>}
        </div>
        <a className={style.projects_link} href={currentProject && currentProject.link} target='_blank'>Перейти на сайт</a>
      </div>

    </div>
  );
}

export default Portfolio;