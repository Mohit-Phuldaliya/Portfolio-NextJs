import React, { useEffect, useState } from "react";

export default function useThemeSwitcher() {
  const preferDarkQuery = "(prefer-color-scheme: dark)";
  const [mode, setMode] = useState("");

  useEffect(() => {
    const mediaQuery = window.matchMedia(preferDarkQuery);
    const usePref = window.localStorage.getItem("theme");

    const handleChnage = () => {
      if (usePref) {
        let check = usePref == "dark" ? "dark" : "light";
        setMode(check);
        if (check == "dark") {
          document.documentElement.classList.add("dark");
        } else {
          document.documentElement.classList.remove("dark");
        }
      } else {
        let check = mediaQuery.matches ? "dark" : "lgiht";
        setMode(check);

        if (check == "dark") {
          document.documentElement.classList.add("dark");
        } else {
          document.documentElement.classList.remove("dark");
        }
      }
    };

    handleChnage();

    mediaQuery.addEventListener("change", handleChnage);

    return () => mediaQuery.removeEventListener("change", handleChnage);
  }, []);

  useEffect(() => {
    if (mode === "dark") {
      window.localStorage.setItem("theme", "dark");
      document.documentElement.classList.add("dark");
    }
    if (mode === "light") {
      window.localStorage.setItem("theme", "light");
      document.documentElement.classList.remove("dark");
    }
  });

  return [mode, setMode];
}
