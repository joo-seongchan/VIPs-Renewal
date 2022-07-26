import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./component/pages/home/Home";
import { Steak } from "./component/pages/steak/Steak";
import { Saladbar } from "./component/pages/saladbar/Saladbar";
import { Store } from "./component/pages/store/Store";
import { Benefit } from "./component/pages/benefit/Benefit";
import { Reservation } from "./component/pages/reservation/Reservation";
import { Header } from "./component/Header";
import { Footer } from "./component/Footer";
import { GlobalStyle } from "./styles/GlobalStyle";

function App() {
  return (
    <Router>
      <Header />
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/steak" element={<Steak />}></Route>
        <Route path="/saladbar" element={<Saladbar />}></Route>
        <Route path="/store" element={<Store />}></Route>
        <Route path="/benefit" element={<Benefit />}></Route>
        <Route path="/reservation" element={<Reservation />}></Route>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
