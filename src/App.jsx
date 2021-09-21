import "./styles/base.sass";
import Header from "./components/shared/Header";
import Footer from "./components/shared/Footer";
import Parcels from "./components/Parcels";

export default function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Parcels />
      </main>
      <Footer />
    </div>
  );
}
