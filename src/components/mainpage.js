import React, { Component } from 'react';


class mainpage extends Component {
    render() {
return (
  <div className="wrapper">
  
  <main className="main">
    <section className="service">
      <div className="service__container">
        <div className="service__content">
          <h1 className="service__title">
            Закажите услугу на DelFel. <br />
            Найдем исполнителя
            <br />
            для решения любых задач
          </h1>
          <div className="service__search ">
            <form action="#" className="search-service">
              <input
                placeholder="Услуга или специалист"
                type="text"
                className="search-service__input"
              />
              <button type="button" className="search-service__btn">
                Найти
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
    <section className="typesOfServices">
      <div className="typesOfServices__container">
        <h2 className="typesOfServices__title title">Виды услуг</h2>
        <div className="typesOfServices__items">
          <div className="typesOfServices__item item-typesOfServices">
            <div className="item-typesOfServices__image">
              <img
                className="item-typesOfServices__img"
                src="unsplash_MYbhN8KaaEc.jpg"
                alt=""
              />
            </div>
            <a href="" className="item-typesOfServices_title">
              Деловые услуги
            </a>
          </div>
          <div className="typesOfServices__item item-typesOfServices">
            <div className="item-typesOfServices__image">
              <img
                className="item-typesOfServices__img"
                src="image.jpg"
                alt=""
              />
            </div>
            <a href="" className="item-typesOfServices_title">
              Компьютеры и IT
            </a>
          </div>
          <div className="typesOfServices__item item-typesOfServices">
            <div className="item-typesOfServices__image">
              <img
                className="item-typesOfServices__img"
                src="unsplash_GiZ7JKT30Rk.jpg"
                alt=""
              />
            </div>
            <a href="" className="item-typesOfServices_title">
              Перевозки,
              <br />
              доставка, спецтехника
            </a>
          </div>
          <div className="typesOfServices__item item-typesOfServices">
            <div className="item-typesOfServices__image">
              <img
                className="item-typesOfServices__img"
                src='Group 511.jpg'
                alt=""
              />
            </div>
            <a href="" className="item-typesOfServices_title">
              Дом, ремонт, строительство
            </a>
          </div>
          <div className="typesOfServices__item item-typesOfServices">
            <div className="item-typesOfServices__image">
              <img
                className="item-typesOfServices__img"
                src="image (2).jpg"
                alt=""
              />
            </div>
            <a href="" className="item-typesOfServices_title">
              Автолюбителям
            </a>
          </div>
        </div>
        <div className="typesOfServices__elements elements">
          <div className="elements__element" />
          <div className="elements__element_1" />
          <div className="elements__element_1" />
          <div className="elements__element_1" />
        </div>
        <div className="typesOfServices__all-services all-services ">
          <div className="all-services__dot" />
          <a href="#" className="all-services__all">
            Показать все услуги
          </a>
        </div>
      </div>
    </section>
    <section className="howItWorks">
      <div className="howItWorks__container">
        <h2 className="howItWorks__title title">Как это работает?</h2>
        <div className="howItWorks__items">
          <div className="howItWorks__item item-howItWorks">
            <div className="item-howItWorks__image">
              <img
                className="item-howItWorks__img"
                src="Source 1.jpg"
                alt=""
              />
            </div>
            <div className="item-howItWorks__title">
              Бесплатно создайте заказ
            </div>
          </div>
          <div className="howItWorks__item item-howItWorks">
            <div className="item-howItWorks__image">
              <img
                className="item-howItWorks__img"
                src="Frame 626.jpg"
                alt=""
              />
            </div>
            <div className="item-howItWorks__title">Получите предложения</div>
          </div>
          <div className="howItWorks__item item-howItWorks">
            <div className="item-howItWorks__image">
              <img
                className="item-howItWorks__img"
                src="Frame 626.jpg"
                alt=""
              />
            </div>
            <div className="item-howItWorks__title">
              Выберите лучшего исполнителя
            </div>
          </div>
        </div>
        <div className="howItWorks__body">
          <button type="button" href="#" className="howItWorks__btn">
            Оставить заявку
          </button>
          <button type="button" href="#" className="howItWorks__btn">
            Стать исполнителем
          </button>
        </div>
      </div>
    </section>
    <section className="page-vacancies vacancies">
      <div className=" vacancies__container">
        <h2 className="vacancies__title title">
          Ждут исполнителя прямо сейчас
        </h2>
        <div className="vacancies__items">
          <div className="vacancies__item item-vacancies">
            <div className="item-vacancies__body body-item-vacancies">
              <div className="body-item-vacancies__title">
                Перевозка груза на участок
              </div>
              <div className="body-item-vacancies__block">
                <div className="body-item-vacancies__text">
                  Здравствуйте !Необходимо отвезти кирпич в загородный дом.
                  Ехать примерно 40 км.
                </div>
                <div className="body-item-vacancies__read _icon-Vector-1">
                  Читать описание
                </div>
              </div>
              <div className="body-item-vacancies__city">г.Череповец</div>
              <div className="body-item-vacancies__type">
                Перевозки, доставка, спецтехника/Грузоперевозки
              </div>
            </div>
            <div className="item-vacancies__respond respond-item-vacancies">
              <div className="respond-item-vacancies__title">
                ООО "Стройсервис"{" "}
              </div>
              <button type="button" className="respond-item-vacancies__btn">
                Откликнуться
              </button>
              <div className="respond-item-vacancies__time">
                <img
                  className="respond-item-vacancies__icon"
                  src="Date_today.png"
                  alt="календарь"
                />
                <div className="respond-item-vacancies__time-title ">
                  Опубликовано час назад
                </div>
              </div>
            </div>
          </div>
          <div className="vacancies__item item-vacancies">
            <div className="item-vacancies__body body-item-vacancies">
              <div className="body-item-vacancies__title">
                Перевозка груза на участок
              </div>
              <div className="body-item-vacancies__block">
                <div className="body-item-vacancies__text">
                  Здравствуйте !Необходимо отвезти кирпич в загородный дом.
                  Ехать примерно 40 км.
                </div>
                <div className="body-item-vacancies__read _icon-Vector-1">
                  Читать описание
                </div>
              </div>
              <div className="body-item-vacancies__city">г.Череповец</div>
              <div className="body-item-vacancies__type">
                Перевозки, доставка, спецтехника/Грузоперевозки
              </div>
            </div>
            <div className="item-vacancies__respond respond-item-vacancies">
              <div className="respond-item-vacancies__title">
                ООО "Стройсервис"{" "}
              </div>
              <button type="button" className="respond-item-vacancies__btn">
                Откликнуться
              </button>
              <div className="respond-item-vacancies__time">
                <img
                  className="respond-item-vacancies__icon"
                  src="Date_today.png"
                  alt="календарь"
                />
                <div className="respond-item-vacancies__time-title ">
                  Опубликовано час назад
                </div>
              </div>
            </div>
          </div>
          <div className="vacancies__item item-vacancies">
            <div className="item-vacancies__body body-item-vacancies">
              <div className="body-item-vacancies__title">
                Перевозка груза на участок
              </div>
              <div className="body-item-vacancies__block">
                <div className="body-item-vacancies__text">
                  Здравствуйте !Необходимо отвезти кирпич в загородный дом.
                  Ехать примерно 40 км.
                </div>
                <div className="body-item-vacancies__read _icon-Vector-1">
                  Читать описание
                </div>
              </div>
              <div className="body-item-vacancies__city">г.Череповец</div>
              <div className="body-item-vacancies__type">
                Перевозки, доставка, спецтехника/Грузоперевозки
              </div>
            </div>
            <div className="item-vacancies__respond respond-item-vacancies">
              <div className="respond-item-vacancies__title">
                ООО "Стройсервис"{" "}
              </div>
              <button type="button" className="respond-item-vacancies__btn">
                Откликнуться
              </button>
              <div className="respond-item-vacancies__time">
                <img
                  className="respond-item-vacancies__icon"
                  src="Date_today.png"
                  alt="календарь"
                />
                <div className="respond-item-vacancies__time-title ">
                  Опубликовано час назад
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="vacancies__all-services all-services ">
          <div className="all-services__dot" />
          <a href="#" className="all-services__all">
            Все заказы
          </a>
        </div>
      </div>
    </section>
    <section className="page-theBest theBest">
      <div className="theBest__container">
        <h2 className="theBest__title title">Лучшие исполнители</h2>
        <div className="theBest__items">
          <div className="theBest__item item-theBest">
            <div className="item-theBest__image">
              <img className="item-theBest__img" src="IMG_1343.jpg" alt="" />
              <div className="item-theBest__rating _icon-Star-1">4,9</div>
            </div>
            <div className="item-theBest__block">
              <a href="#" className="item-theBest__btn">
                балканстрой
              </a>
              <a
                href="#"
                className="item-theBest__comment _icon-icons8--96-1-Traced"
              >
                110
              </a>
            </div>
          </div>
          <div className="theBest__item item-theBest">
            <div className="item-theBest__image">
              <img className="item-theBest__img" src="IMG_1342.jpg" alt="" />
              <div className="item-theBest__rating _icon-Star-1">4,9</div>
            </div>
            <div className="item-theBest__block">
              <a href="#" className="item-theBest__btn">
                стройсервис
              </a>
              <a
                href="#"
                className="item-theBest__comment _icon-icons8--96-1-Traced"
              >
                110
              </a>
            </div>
          </div>
          <div className="theBest__item item-theBest">
            <div className="item-theBest__image">
              <img className="item-theBest__img" src="IMG_1344.jpg" alt="" />
              <div className="item-theBest__rating _icon-Star-1">4,9</div>
            </div>
            <div className="item-theBest__block">
              <a href="#" className="item-theBest__btn">
                мегаполис
              </a>
              <a
                href="#"
                className="item-theBest__comment _icon-icons8--96-1-Traced"
              >
                110
              </a>
            </div>
          </div>
          <div className="theBest__item item-theBest">
            <div className="item-theBest__image">
              <img className="item-theBest__img" src="IMG_1341.jpg" alt="" />
              <div className="item-theBest__rating _icon-Star-1">4,9</div>
            </div>
            <div className="item-theBest__block">
              <a href="#" className="item-theBest__btn item-theBest__btn_user">
                Виктор Б.
              </a>
              <a
                href="#"
                className="item-theBest__comment _icon-icons8--96-1-Traced"
              >
                110
              </a>
            </div>
          </div>
        </div>
        <div className="theBest__elements elements">
          <div className="elements__element" />
          <div className="elements__element_1" />
          <div className="elements__element_1" />
          <div className="elements__element_1" />
        </div>
        <div className="theBest__all-services all-services ">
          <div className="all-services__dot" />
          <a href="#" className="all-services__all">
            Посмотреть всех исполнителей
          </a>
        </div>
      </div>
    </section>
    <section className="page-option option">
      <div className="option__container">
        <div className="option__content">
          <div className="option__body body-option">
            <div className="body-option__title">
              Для тех, кому нужен специалист
            </div>
            <div className="body-option__text">
              Вам достаточно опубликовать заказ и заинтересованные пользователи
              сами предложат свои услуги. Останется только выбрать лучшего
              исполнителя из числа откликнувшихся специалистов и начать с ним
              сотрудничество. Хороших вам исполнителей!
            </div>
            <a href="" className="body-option__btn">
              Опубликовать заказ
            </a>
          </div>
          <div className="option__body body-option">
            <div className="body-option__title">
              Для тех, кому нужен специалист
            </div>
            <div className="body-option__text">
              Начиная работу с нашим сайтом, вам прежде всего необходимо пройти
              регистрацию и заполнить профиль. Указать в профиле всю необходимую
              информацию о своих навыках и опыте, а так же добавить контактные
              данные. Успешного поиска работы!
            </div>
            <a href="" className="body-option__btn">
              Стать исполнителем
            </a>
          </div>
        </div>
      </div>
    </section>
  </main>
</div>

)
}
}
export default mainpage;