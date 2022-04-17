import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

class Navbar extends Component {

    render() {

        this.props.cartUpdated();

        let total = 0;

        this.props.cart.map(item => total += item.product.price * item.quantity);

        return (

            <header class="header">
			<div class="header__container">
				<nav class="header__body">
					<ul class="header__menu menu-header">
						<li class="menu-header__item"><a href="/" class="menu-header__link">Главная</a></li>
						<li class="menu-header__item"><a href="/my-cart" class="menu-header__link">Создать заказ</a></li>
						<li class="menu-header__item"><a href="#" class="menu-header__link">Исполнители</a></li>
						<li class="menu-header__item"><a href="#" class="menu-header__link">Заказы</a></li>
						<li class="menu-header__item"><a href="/catalog" class="menu-header__link">Каталог услуг</a></li>
						<li class="menu-header__item"><a href="#" class="menu-header__link">Акции</a></li>
					</ul>

					<div class="header__user user-header">
						<div class="user-header__icon _icon-Vector"></div>
						<a href="#" class="user-header__title">Вход и Регистрация</a>
					</div>
				</nav>
			</div>
		</header>
        )
    }
}

const mapStateToProps = (state) => {

    return {
        cart: state.cart.cart,
        cartUpdated: () => { return true }
    }
};

export default connect(mapStateToProps)(Navbar);