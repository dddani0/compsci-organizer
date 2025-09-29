import Image from "next/image";
import styles from "./page.module.css";

export default async function Home() {
  const response = await fetch("http://localhost:8080/api/subjects");
  const data = await response.json();

  return (
    <ul>
      {data.map((subject: any) => (
        <li key={subject.id}>{subject.name}</li>
      ))}
    </ul>
  );
}
