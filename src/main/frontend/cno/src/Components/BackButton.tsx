import { useNavigate } from "react-router-dom"
import styles from "../app/page.module.css"

export function BackButton() {
    const navigate = useNavigate();

    function goBack() {
        navigate(-1);
    }
    return (
        <button className={styles.backButton} onClick={goBack}>
            Back
        </button>
    )
}