import React, { useState, useEffect } from 'react';
import style from  './FlashBackground.module.scss'

const FlashBackground = () => {
    const [flashes, setFlashes] = useState([]); // Массив со вспышками
    const maxFlashes = 20; // Максимальное количество вспышек
    const animationDuration = 1; // Длительность анимации в секундах
  
    useEffect(() => {
      const createRandomFlash = () => {
        return {
          top: `${Math.random() * 100}%`,
          left: `${Math.random() * 100}%`,
          backgroundColor: `rgba(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255}, 0.4)`,
          animationDuration: `${animationDuration}s`,
          animationName: 'fadeInOut',
        };
      }; // Параметры создания вспышек
  
      const updateFlashes = () => {
        if (flashes.length < maxFlashes) {
          // Создаем новую вспышку со случайными стилями
          const newFlash = createRandomFlash();
  
          // Добавляем новую вспышку к существующим
          setFlashes((prevFlashes) => [...prevFlashes, newFlash]);
  
          // Удаляем вспышку после завершения анимации
          setTimeout(() => {
            setFlashes((prevFlashes) => prevFlashes.filter((flash) => flash !== newFlash));
          }, animationDuration * 500);
        }
      }; // Управление вспышками
  
      // Таймер для создания вспышек
      const timer = setInterval(updateFlashes, 50);
  
      return () => clearInterval(timer);
    }, [flashes]);

  return (
    <div className={style.background}>
      <div className={style.background_glass}></div>
        {flashes.map((flash, index) => (
          <div key={index} className={style.background_flash} style={flash}></div>
        ))}
    </div>
  )
}

export default FlashBackground