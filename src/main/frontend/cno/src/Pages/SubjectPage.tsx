import { useLocation, useNavigate } from 'react-router-dom';
import styles from '../app/page.module.css';

export default function SubjectPage() {
    const location = useLocation();
    const { subject } = location.state || {};
    const navigate = useNavigate();

    if (!subject) {
        return <div>No subject data available.</div>;
    }

    function handleBackButtonClick() {
        navigate(-1); // Navigate back to the previous page
    }

    return (
        <div className={styles.subjectPage}>
            <div>
                <h1>{subject.name}</h1>
            </div>
            <div>
                <p>{subject.description}</p>
            </div>
            <div className={styles.noteBox}>
                <p>{subject.notes != null ? subject.notes : "No notes available."}</p>
            </div>
            <button
                title="BackButton"
                onClick={handleBackButtonClick}>
                Back
            </button>
        </div>
    )
}