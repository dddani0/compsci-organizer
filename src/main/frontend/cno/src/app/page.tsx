import Image from "next/image";
import styles from "./page.module.css";

export default async function Home() {
  try {
    const response = await fetch("http://localhost:8080/api/subjects");
    const data = await response.json();

    return (
      <ul>
        {data.map((subject: any) => (
          <li key={subject.id}>{subject.name}, {subject.description}, {(subject.notes != null) ?
            (subject.notes.map((note: any) => (
              <li key={note.id}>{note.title}, {note.content}, {note.date}</li>
            ))) :
            ("No available notes")}</li>

        ))}
      </ul>
    );
  } catch (error) {
    return <div>Error loading data</div>;
  }
}
