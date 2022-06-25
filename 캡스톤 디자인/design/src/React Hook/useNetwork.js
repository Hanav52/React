import { useEffect, useRef, useState } from "react";

const useNetword = onChange => {
    const [status, setStatus] = useState(navigator.onLine);
    const handleChange = () => {};
    useEffect(() => {
        window.addEventListener("online", handleChange);
        window.addEventListener("offline", handleChange);
    })
}
  
function App() {
  return (
    <div className="App">
    </div>
  );
}
  