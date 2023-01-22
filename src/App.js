import React from "react";
import './App.css';

const App = () => {
  return (
    <div>
      <Head />

   </div>
       

  );
}

const Head = () => {
  return ( 
        <div className="wrapper">
            <header className="header">
                <div className="header__container _container">
                    <a href="" className="header__logo">OJJO</a>
                    <nav className="header__menu menu">
                        <ul className="menu__list">
                            <li className="menu__item">
                                <a href="" className="menu__link">Контрагентам</a>
                            </li>
                            <li classs="menu__item">
                                <a href="" className="menu__link">Дизайнерам</a>
                            </li>
                            <li classs="menu__item">
                                <a href="" className="menu__link">Вакансии</a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>
    
    
             <main className="page">
                <div className="page__mainblock mainblock">
                    <div className="mainblock__container _container">
                        <div className="mainblock__body">
                            <h1 className="mainblock__title">Долго, дорого, богато!</h1>
                            <a href="" className="mainblock__button">каталог изделий</a>
                        </div>
                    </div>
                    <div className="mainblock__image _ibg">
                        <img src="assets/bgc.png" alt="/"></img>
                    </div>
    
                </div>
    

                <div className="page__services services">
                <div className="services__container _container">
                    <div className="services__body">
                        <div className="services__column">
                            <div className="services__item item-service">
                                <div className="item-service__img">
                                        <img src="assets/Rectangle 2.png" alt="/"></img>
                                </div>
                                <h3 className="item-service__title">Свадьба</h3>
                            </div>
                        </div>
                        <div className="services__column">
                            <div className="services__item item-service">
                            <div className="item-service__img">
                                        <img src="assets/Rectangle 2.png" alt="/"></img>
                                </div>
                                <h3 className="item-service__title">Мужу</h3>
                            </div>
                        </div>
                        <div className="services__column">
                            <div className="services__item item-service">
                            <div className="item-service__img">
                                        <img src="assets/Rectangle 2.png" alt="/"></img>
                                </div>
                                <h3 className="item-service__title">Жене</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

    
                <div className="page__advantages advantages">
                    <div className="advantages__container _container">
                        <div className="advantages__header header-block">
                            <h2 className="header-block__title">Премиальные материалы</h2>
                            <div className="header-block__subtitle">Изделия на все случаи жизни</div>
                        </div>
                        <div className="advantages__body">
                            <div className="advantages__column">
                                <div className="advantages__item">
                                    <div className="advantages__value">342</div>
                                    <div className="advantages__text">изделия</div>
                                </div>
                            </div>
                            <div className="advantages__column">
                                <div class="advantages__item">
                                    <div className="advantages__value">700+</div>
                                    <div className="advantages__text">заказчиков</div>
                                </div>
                            </div>
                            <div className="advantages__column">
                                <div className="advantages__item">
                                    <div className="advantages__value">100%</div>
                                    <div className="advantages__text">качество</div>
                                </div>
                            </div>
                            <div className="advantages__column">
                                <div className="advantages__item">
                                    <div className="advantages__value">500+</div>
                                    <div className="advantages__text">мероприятий</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
    
    
                <div className="page__jewelry jewelry">
                    <div className="jewelry__container _container">
                        <div className="jewelry__header header-block">
                            <h2 className="header-block__title">Настоящая красота здесь!</h2>
                            <div className="header-block__subtitle">К мероприятиям</div>
                        </div>
                        <div className="jewelry__body">
                            <div className="jewelry__column">
                                <div className="jewelry__item item-jewelry">
                                    <div className="item-jewelry__content">
                                        <a href="" className="item-jewelry__link">
                                            <h2 className="item-jewelry__title">Кольца</h2>
                                        </a>
                                    </div>
                                    <a href="" className="item-jewelry__image _ibg">
                                        <img src="assets/img1.png" alt=""></img>
                                    </a>
                                </div>
                            </div>
                            <div className="jewelry__column">
                                <div className="jewelry__item item-jewelry">
                                    <div className="item-jewelry__content">
                                        <a href="" className="item-jewelry__link">
                                            <h2 className="item-jewelry__title">Серьги</h2>
                                        </a>
                                    </div>
                                    <a href="" className="item-jewelry__image _ibg">
                                        <img src="assets/img2.png" alt=""></img>
                                    </a>
                                </div>
                            </div>
                            <div className="jewelry__column">
                                <div className="jewelry__item item-jewelry">
                                    <div className="item-jewelry__content">
                                        <a href="" className="item-jewelry__link">
                                            <h2 className="item-jewelry__title">Подвески</h2>
                                        </a>
                                    </div>
                                    <a href="" className="item-jewelry__image _ibg">
                                        <img src="assets/img3.png" alt=""></img>
                                    </a>
                                </div>
                            </div>
                            <div className="jewelry__column">
                                <div className="jewelry__item item-jewelry">
                                    <div className="item-jewelry__content">
                                        <a href="" className="item-jewelry__link">
                                            <h2 className="item-jewelry__title">Браслеты</h2>
                                        </a>
                                    </div>
                                    <a href="" className="item-jewelry__image _ibg">
                                        <img src="assets/img4.png" alt=""></img>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
    
                <div className="page__about about">
                    <div className="about__container _container">
                        <div className="about__header header-block">
                            <h2 className="header-block__title">#ojjo_jewerly</h2>
                            <div className="header-block__subtitle">Мы в социальных сетях</div>
                        </div>
                        <div className="about__body">
                            <div className="about__video">
                                <iframe width="560" height="315" src="https://www.youtube.com/embed/W5PRZuaQ3VM"
                                    title="YouTube video player" frameborder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    allowfullscreen></iframe>
                            </div>
                            <div className="about__content">
                                <h2 className="about__title">Посетите наши салоны в Москве</h2>
                                <div className="about__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut duis
                                    tortor vitae
                                    pellentesque egestas quam pulvinar. Pellentesque porttitor velit sit pellentesque.
                                    Suspendisse donec
                                    pretium id dignissim. Dignissim ultrices eget orci viverra. Egestas quis et ut ultrices
                                    imperdiet
                                    lectus nulla tempus. Pharetra lorem sem purus nisi libero viverra ipsum.</div>
                            </div>
                        </div>
    
    
                    </div>
                </div>
    
    
                <div className="page__support support">
                    <div className="support__container _container">
                        <div className="support__header header-block">
                            <h2 className="header-block__title">Эксклюзивная рассылка</h2>
                            <div className="header-block__subtitle">Полезные советы и персональный предложения</div>
                        </div>
                        <div className="support__items">
                            <div className="support__item  item-support">
                                <div className="item-support__emails">
                                    <a href="" className="item-support__email">ojjo@example.ru</a>
                                </div>
                                <div className="item-support__label">Получать предложения</div>
                                <a href="" className="item-support__button">Отправить запрос</a>
                            </div>
                            <div class="support__item  item-support item-support_active">
                                <div className="item-support__emails">
                                    <a href="" className="item-support__email">ojjo@example.ru</a>
                                </div>
                                <div className="item-support__label">Получать предложения</div>
                                <a href="" className="item-support__button">Отправить запрос</a>
                            </div>
                            <div class="support__item  item-support">
                                <div className="item-support__emails">
                                    <a href="" className="item-support__email">ojjo@example.ru</a>
                                </div>
                                <div className="item-support__label">Получать предложения</div>
                                <a href="" className="item-support__button">Отправить запрос</a>
                            </div>
                        </div>
    
                    </div>
                </div>
    
            </main>
    
            <div className="footer">
                <div className="footer__top">
                    <div className="footer__main _container">
                        <div className="footer__row">
                            <div className="footer__column">
                                <div className="footer__label">Полезные ссылки</div>
                                <nav className="footer__menu menu-footer">
                                    <ul className="menu-footer__list">
                                        <li className="menu-footer__item">
                                            <a href="" className="menu-footer__link">Доставка</a>
                                        </li>
                                        <li class="menu-footer__item">
                                            <a href="" className="menu-footer__link">Оплата </a>
                                        </li>
                                        <li class="menu-footer__item">
                                            <a href="" className="menu-footer__link">Акции</a>
                                        </li>
                                        <li class="menu-footer__item">
                                            <a href="" className="menu-footer__link">Политика конфиденциальности</a>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                            <div className="footer__column">
                                <div className="footer__label">Оплата</div>
                                <nav className="footer__menu menu-footer">
                                    <ul className="menu-footer__list">
                                        <li className="menu-footer__item">
                                            <a href="" className="menu-footer__link">Lorem ipsum dolor sit amet.</a>
                                        </li>
                                        <li className="menu-footer__item">
                                            <a href="" className="menu-footer__link">
                                                <img src="assets/Rectangle 13.png" alt="/"></img>
                                            </a>
                                        </li>
                                        <li className="menu-footer__item">
                                            <a href="" className="menu-footer__link">
                                                <img src="assets/Rectangle 14.png" alt="/"></img>
                                            </a>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                            <div className="footer__column">
                                <div className="footer__label">контакты</div>
                                <nav className="footer__menu menu-footer">
                                    <ul className="menu-footer__list">
                                        <li className="menu-footer__item">
                                            <a href="" className="menu-footer__link">8 (812) 234-56-55</a>
                                        </li>
                                        <li class="menu-footer__item">
                                            <a href="" className="menu-footer__link">8 (812) 234-56-55 </a>
                                        </li>
                                        <li class="menu-footer__item">
                                            <a href="" className="menu-footer__link">ojjo@ojjo.ru</a>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer__bottom">
                    <div className="footer__container _container">
                        <div className="footer__copy">(c) 2020 OJJO jewelry</div>
                        <div className="footer__social social">
    
                            <a href="" className="social-item">
                            <img src="assets/Vector (1).png" alt="/"></img>
                            </a>
                            <a href="" className="social-item">
                            <img src="assets/Vector (2).png" alt="/"></img>
                            </a>
                            <a href="" className="social-item">
                            <img src="assets/Vector (3).png" alt="/"></img>
                            </a>
                            <a href="" className="social-item">
                            <img src="assets/Vector (4).png" alt="/"></img>
                            </a>
    
                        </div>
                    </div>
                </div>
            </div> 
    
        </div>
    
  );
}



export default App;
