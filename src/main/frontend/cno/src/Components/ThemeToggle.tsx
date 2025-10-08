'use client';
import { useState, useEffect, use } from 'react';
import styles from '../app/page.module.css';

export default function ThemeToggle() {
    const [isDark, setDark] = useState(false);

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme');
        const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
        if (savedTheme == 'dark' || (!savedTheme && prefersDark)) {
            document.documentElement.setAttribute('data-theme', 'dark');
            setDark(true);
        }
    }, []);

    const toggleTheme = () => {
        const newTheme = !isDark;
        setDark(newTheme);

        if (newTheme) {
            document.documentElement.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
        }
        else {
            document.documentElement.setAttribute('data-theme', 'light');
            localStorage.setItem('theme', 'light');
        }
    }

    return (
        <div className={styles.themeToggle}>
            <button onClick={toggleTheme}>
                <img src="/Images/lightmod.png" alt="Toggle theme" />
            </button>
        </div>
    )
}