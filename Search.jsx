import { useEffect, useState } from "react";
import "../styles/Search.css";
export default function SearchBox() {
  const placeholders = [
    "Search notes...",
    "Find internships...",
    "Search latest jobs...",
    "Explore study materials..."
  ];

  const [placeholder, setPlaceholder] = useState(placeholders[0]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % placeholders.length);
    }, 2000); // 2 sec me change hoga

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setPlaceholder(placeholders[index]);
  }, [index]);

  return (
    <input
      type="text"
      placeholder={placeholder}
      className="search-box"
    />
  );
}