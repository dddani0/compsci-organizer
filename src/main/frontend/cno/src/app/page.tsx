"use client"
import styles from "./page.module.css";
import IconButton from "../Components/IconButton";
//Pages
import ErrorPage from "../Pages/ErrorPage";
import LoadingPage from "../Pages/LoadingPage";
import BrowsePage from "../Pages/BrowsePage";
//Router
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import SubjectPage from "@/Pages/SubjectPage";


export default function Home() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("http://localhost:8080/api/subjects");
        if (!response.ok) {
          throw new Error('HTTP error! status: ' + response.status);
        }
        const data = await response.json();
        setData(data);
      }
      catch (err) {
        setError(err as any);
      }
      finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  if (loading) {
    return <LoadingPage />;
  }
  if (error) {
    return <ErrorPage error={error} />;
  }
  return (
    <Router>
      <Routes>
        <Route path="/" element={<BrowsePage data={data} />} />
        <Route path="/subject" element={<SubjectPage />} />
      </Routes>
    </Router>
  )

}
