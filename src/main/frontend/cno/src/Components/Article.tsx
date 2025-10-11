'use client';
import { useState } from "react";
import styles from '../app/page.module.css';

export default function Article({ content }: { content?: string }) {
    const [visible, setVisible] = useState(false);

    return (
        <div>
            {content != null ?
                <>
                    <button className={styles.showContentButton} onClick={() => setVisible(!visible)}>
                        {visible ? "Hide" : "Show"} Content
                    </button>
                    {visible && <div>{content}</div>}
                </> : "No content available."}

        </div>
    );
}