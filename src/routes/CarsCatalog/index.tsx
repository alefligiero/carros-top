import "./styles.css";
import Header from "../../components/Header";
import SearchBar from "../../components/SearchBar";
import CarCatalogCard from "../../components/CarCatalogCard";

export default function CarsCatalog() {
  return (
    <>
      <Header />
      <main>
        <section id="ct-catalog-section" className="ct-container">
          <div className="ct-catalog-search-bar-container">
            <SearchBar />
          </div>
          <div className="ct-catalog-cards-container">
            <CarCatalogCard />
            <CarCatalogCard />
            <CarCatalogCard />
            <CarCatalogCard />
            <CarCatalogCard />
            <CarCatalogCard />
            <CarCatalogCard />
          </div>
        </section>
      </main>
    </>
  );
}
