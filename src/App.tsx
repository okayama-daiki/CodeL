import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import style from "./App.module.css";

function App() {
  return (
    <>
      <Header />
      <main className={style.mainWrapper}>
        <Main />
      </main>
      <Footer />
    </>
  );
}

export default App;
