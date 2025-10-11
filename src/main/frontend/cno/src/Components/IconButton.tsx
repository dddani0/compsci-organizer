'use client';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from "../app/page.module.css"

export default function IconButton({ Subject }: { Subject: any }) {
    const [name, setName] = useState(Subject.name);
    const [icon, setIcon] = useState(Subject.iconName);
    const [clicked, setClicked] = useState(false);
    const navigate = useNavigate();

    function handleClick() {
        setClicked(!clicked);
        //route to different page
        navigate(`/subject/${Subject.id}`, { state: { subject: Subject } });
    }

    return (
        <button className={styles.iconButton} onClick={handleClick}>
            <div className={styles.divflexbox}>
                <img src={`/Images/${icon}`} alt={name} />
                {name}
            </div>
        </button>
    )
}
