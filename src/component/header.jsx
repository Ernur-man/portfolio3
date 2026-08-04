import { useState } from 'react';
import './header.less';
import logo from '../assets/logo.svg';

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header>
            <div className="container">
                <a href="/portfolio3/"><img src={logo} alt="LOGO" loading='lazy'/></a>

                <div className="burger" onClick={() => setIsOpen(!isOpen)}>
                    <i className={isOpen ? "fa-solid fa-x" : "fa-solid fa-bars"}></i>
                </div>

                <menu className={isOpen ? 'active' : ''}>
                    <li><a href="#home" onClick={() => setIsOpen(false)}>Home</a></li>
                    <li><a href="#projects" onClick={() => setIsOpen(false)}>Projects</a></li>
                    <li><a href="#experience" onClick={() => setIsOpen(false)}>Experience</a></li>
                    <li><a href="#contact" onClick={() => setIsOpen(false)}>Contact</a></li>
                </menu>
            </div>
        </header>
    );
}
