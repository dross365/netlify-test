import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <section>
        <h1>David's Test React Netlify Website</h1>
        <h2>Things I've learned</h2>
        <ul>
          <li>Check package.json file and verify the build command.</li>
          <li>The build path is dist/ not build/ for Vite React projects.</li>
          <li>I learned how to debug React deployments to Netlify.</li>
        </ul>
      </section>
    </>
  );
}

export default App;
