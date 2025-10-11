import { useLocation, useNavigate } from 'react-router-dom';
import styles from '../app/page.module.css';
import Article from '@/Components/Article';
import { BackButton } from '@/Components/BackButton';

export default function SubjectPage() {
    const location = useLocation();
    const { subject } = location.state || {};

    if (!subject) {
        return <div>No subject data available.</div>;
    }

    return (
        <div className={styles.subjectPage}>
            <div className={styles.title}>
               {subject.name}
            </div>
            <div className={styles.description}>
                {subject.description}
            </div>
            <div className={styles.noteBox}>
                <Article content={subject.notes} />
            </div>
            <BackButton />
        </div>
    )
}