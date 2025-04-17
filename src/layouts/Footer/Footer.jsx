import './Footer.scss'
import Socials from '@/components/Socials'

const Footer = () => {
    const menuItems = [
        {
            title: 'Home',
            links: [
                { label: 'Categories', href: '/categories' },
                { label: 'Devices',  href: '/devices' },
                { label: 'Pricing', href: '/pricing' },
                { label:'FAQ', href: '/faq' },
            ],
            href: '/',
        },
        {
            title: 'Movies',
            links: [
                { label:'Genres', href: '/genres' },
                { label:'Trending', href: '/trending' },
                { label:'New Release', href: '/'},
                { label:'Popular', href: '/popular'},
            ],
            href: '/movies',
        },
        {
            title: 'Popular',
            links: [
                { label: 'Genres', href: '/genres' },
                { label: 'Trending', href: '/trending' },
                { label: 'New Release', href: '/new' },
                { label: 'Popular', href: '/popular' },
            ],
            href: '/popular',
        },
        {
            title: 'Support',
            links: [{ label: 'Contact Us', href: '/contact' }],
            href: '/support',
        },
        {
            title: 'Subscription',
            links: [
                { label: 'Plans', href: '/plans' },
                { label: 'Features', href: '/features' },
            ],
            href: '/subscriptions',
        },
        {
            title: 'Connect With Us',
            socialLinks: [
                {
                    label: 'Facebook',
                    iconName: 'facebook',
                    href: 'https://www.facebook.com/',
                },
                {
                    label: 'Twitter',
                    iconName: 'twitter',
                    href: 'https://twitter.com/',
                },
                {
                    label: 'LinkedIn',
                    iconName: 'linked-in',
                    href: 'https://www.linkedin.com/',
                },
            ]
        },
    ]

    const extraLinks = [
        { label: 'Terms of Use', href: '/terms' },
        { label: 'Privacy Policy', href: '/privacy' },
        { label: 'Cookie Policy', href: '/cookies' },
    ];

    return (
        <footer className="footer">
            <div className="footer__inner container">
                <nav className="footer__menu">
                    {menuItems.map(({ title, links, socialLinks, href }, index) => (
                        <div className="footer__menu-column" key={index}>
                            <a className="footer__menu-title h6" href={href}>{title}</a>
                            {links?.length > 0 && (
                                <ul className="footer__menu-list">
                                    {links.map((link, index) => (
                                        <li className="footer__menu-item" key={index}>
                                            <a className="footer__menu-link" href={link.href}>
                                                {link.label}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            )}
                            {socialLinks?.length > 0 && (
                                <Socials className="footer__soc1als" links={socialLinks}  />
                            )}
                        </div>
                    ))}
                </nav>
                <div className="footer__extra">
                    <p className="footer__copyright">
                        @<time dateTime="2023">2023</time> streamvib, All Rights Reserved
                    </p>
                    <div className="footer__extra-links">
                        {extraLinks.map((link, index) => (
                            <a className="footer__extra-link" href={link.href} key={index}>
                                {link.label}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
