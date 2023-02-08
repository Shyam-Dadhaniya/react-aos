import React, { useEffect } from "react";
import AOS from "aos";
import { Homepage } from "./pages";
AOS.init({
  duration: 1200
});

export default function App() {
  useEffect(()=>{
    AOS.init({
      duration: 1200
    });
  }, [])
  return (
    <>
    <Homepage/>
    </>
  );
}
