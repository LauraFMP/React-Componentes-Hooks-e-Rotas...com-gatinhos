import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import About from "./components/About";
import UserList from "./components/UserList";
import NotFound from "./components/NotFound";

export default function App() {
  return (
    <div className="page-shell">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<About />} />
          <Route path="/lista" element={<UserList title="Banco de Bigodes" />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer author="Laura" />
    </div>
  );
}
