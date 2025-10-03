import { useLocation } from 'react-router-dom';

export default function SubjectPage() {
    const location = useLocation();
    const { subject } = location.state || {};

    if (!subject) {
        return <div>No subject data available.</div>;
    }

    return (
        <div>
            <h1>{subject.name}</h1>
        </div>
    )
}