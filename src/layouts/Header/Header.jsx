import './Header.scss'
import Logo from "@/components/Logo/Logo/Logo.jsx";

const Header = () => {
    return (
        <header className="header">
            <div className="header__inner container">
                <Logo
                    loading="eager"
                    className="header__logo"
                />
            </div>
        </header>
    )
}

export default Header
