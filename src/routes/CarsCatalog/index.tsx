import "./styles.css";
import Header from "../../components/Header";
import SearchBar from "../../components/SearchBar";

export default function CarsCatalog() {
  return (
    <>
      <Header />
      <main>
        <section id="catalog-section" className="ct-container">
          <SearchBar />
        </section>
      </main>
    </>
  );
}
