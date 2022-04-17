import React, { Component } from 'react';


class Footer extends Component {
    render() {
return (
  <div className="wrapper">
  <footer className="footer">
    <div className="footer__container">
      <div className="footer__content">
        <div className="footer__top">
          <ul className="footer__list list-footer">
            <li className="list-footer__item">
              <a href="#" className="list-footer__link">
                Заказы
              </a>
            </li>
            <li className="list-footer__item">
              <a href="#" className="list-footer__link">
                Создать заказ
              </a>
            </li>
          </ul>
          <ul className="footer__list list-footer">
            <li className="list-footer__item">
              <a href="#" className="list-footer__link">
                Кабинет исполнителя
              </a>
            </li>
            <li className="list-footer__item">
              <a href="#" className="list-footer__link">
                О сервисе
              </a>
            </li>
          </ul>
        </div>
        <div className="footer__buttom">
          <ul className="footer__list list-footer">
            <li className="list-footer__item">
              <a href="#" className="list-footer__link">
                Поддержка
              </a>
            </li>
            <li className="list-footer__item">
              <a href="#" className="list-footer__link">
                FAQ
              </a>
            </li>
          </ul>
          <ul className="footer__list list-footer">
            <li className="list-footer__item">
              <a href="#" className="list-footer__link">
                Политика конфиденциальности
              </a>
            </li>
            <li className="list-footer__item">
              <a href="#" className="list-footer__link">
                Договор оферты
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</div>


)
}
}
export default Footer;