import "./styles/base.sass";
import Header from "./components/shared/Header";
import Footer from "./components/shared/Footer";
import ParcelsContainer from "./components/ParcelsContainer";

export default function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <ParcelsContainer />
      </main>
      <Footer />
    </div>
  );
}
