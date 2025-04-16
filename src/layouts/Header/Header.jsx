import './Header.scss'
import Logo from "@/components/Logo";
import classNames from "classnames";
import Button from "@/components/Button/index.js";
import BurgerButton from "@/components/BurgerButton/index.js";

const Header = (props) => {
    const { url } = props
    const menuItems = [
        {
            label: 'Home',
            href: '/',
        },
        {
            label: 'Movies & Shows',
            href: '/movies',
        },
        {
            label: 'Support',
            href: '/support',
        },
        {
            label: 'Subscriptions',
            href: '/subscriptions',
        }
    ]
    return (
        <header className="header" data-js-overlay-menu=''>
            <div className="header__inner container">
                <Logo
                    loading="eager"
                    className="header__logo"
                />
               <dialog className="header__overlay-menu-dialog"
               data-js-overlay-menu-dialog=''
               >
                   <nav className="header__menu">
                       <ul className="header__menu-list">
                           {menuItems.map(({ label, href }, index) => (
                               <li key={index} className="header__menu-item">
                                   <a href={href} className={classNames('header__menu-link', {
                                       'is-active': url === href
                                   })}
                                   >
                                       {label}
                                   </a>
                               </li>
                           ))}
                       </ul>
                   </nav>
                   <div className="header__actions">
                       <Button
                           className="header__button"
                           label="Search"
                           iconName="search"
                           isLabelHidden
                           mode="transparent"
                       />
                       <Button
                           className="header__button"
                           label="Notifications"
                           isLabelHidden
                           iconName="notification"
                           mode="transparent"
                       />
                   </div>
               </dialog>
                <BurgerButton
                    className="header__burger-button visible-tablet"
                    extraAttrs={{ 'data-js-open-overlay-menu-burger-button': '' }}
                />
            </div>
        </header>
    )
}

export default Header
