import { use, useState } from 'react';
import './header.less';
import logo from '../assets/logo.svg';
import { useTranslation } from 'react-i18next';

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [activeEn, setActiveEn] = useState(true);
    const [activeRu, setActiveRu] = useState(false);
    const {t, i18n} = useTranslation();
    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };

    function handleSubmit(e){
        let tag = e.target
        if(tag.value == "en"){
            changeLanguage("en")
            setActiveEn(true);
            setActiveRu(false);
        }
        else{
            changeLanguage("ru")
            setActiveEn(false);
            setActiveRu(true);
        }
    }
    return (
        <header>
            <div className="container">
                <a href="/portfolio3/"><img src={logo} alt="LOGO" loading='lazy'/></a>

                <div className="burger" onClick={() => setIsOpen(!isOpen)}>
                    <i className={isOpen ? "fa-solid fa-x" : "fa-solid fa-bars"}></i>
                </div>

                <menu className={isOpen ? 'active' : ''}>
                    <li><a href="#home" onClick={() => setIsOpen(false)}>{t('home')}</a></li>
                    <li><a href="#projects" onClick={() => setIsOpen(false)}>{t('projects')}</a></li>
                    <li><a href="#experience" onClick={() => setIsOpen(false)}>{t('experience')}</a></li>
                    <li><a href="#contact" onClick={() => setIsOpen(false)}>{t('contact')}</a></li>
                </menu>
                <div className={isOpen ? 'language active' : 'language'}>
                    <button value="en" onClick={handleSubmit} className={activeEn ? 'btn active' : 'btn'}>EN</button>
                    <button value="ru" onClick={handleSubmit} className={activeRu ? 'btn active' : 'btn'}>RU</button>
                </div>
            </div>
        </header>
    );
}
