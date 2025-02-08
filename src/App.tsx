import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import  Header  from "@/sections/Header";
import  Hero  from "@/sections/Hero";
import { Internship } from "@/sections/Internship";
import { Projects } from '@/sections/Projects';
import { ContactUs } from '@/sections/ContactUs';
import { Footer } from '@/sections/Footer';

export default function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/internship" element={<Internship />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contactUs" element={<ContactUs />} />
      </Routes>
      <Footer />
    </Router>
  );
}