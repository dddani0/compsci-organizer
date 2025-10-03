import IconButton from "../Components/IconButton";
import styles from "../app/page.module.css";
import "../app/globals.css";

export default function BrowsePage({ data }: { data: any }) {
    return (
        <div className={styles.gridBox}>
            <>
                <h1>Computer Science notes organizer</h1>
                {data.map((subject: any) => (
                    <IconButton key={subject.id} Subject={subject} />
                ))}
            </>
        </div>
    );
}