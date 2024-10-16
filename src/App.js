import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TopNav from "./components/navigation/TopNav";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";

function App() {
  const links = [
    { label: "Home", route: "/" },
    { label: "About", route: "/about" },
    { label: "Projects", route: "/projects" },
    { label: "Contact", route: "/contact" },
  ];

  return (
    <Router>
      <div>
        <TopNav links={links} />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
        <footer class='fixed bottom-0 left-0 w-full bg-gray-800 bg-opacity-95 text-white py-4'>
          <div class='container mx-auto flex justify-center space-x-6'>
            <a
              href='https://github.com/your-username'
              target='_blank'
              class='hover:text-blue-400'>
              GitHub
            </a>
            <a href='mailto:your-email@example.com' class='hover:text-blue-400'>
              keenanlombardd2@gmail.com
            </a>
            <a
              href='https://www.linkedin.com/in/your-linkedin-profile'
              target='_blank'
              class='hover:text-blue-400'>
              LinkedIn
            </a>
            <span class='hover:text-blue-400'>+27 71 586 8386</span>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
