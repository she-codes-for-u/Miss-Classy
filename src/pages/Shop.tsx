import { useNavigate } from "react-router-dom";

const products = Array.from({ length: 8 }, (_, id) => ({
  id,
  image: "",
  name: "",
  price: "",
  discount: "",
  category: "",
  collection: "",
  stock: ""
}));

const Shop = () => {
  const navigate = useNavigate();

  return (
    <main className="page-shell shop-page">
      <div className="shop-header">
        <h1>Shop</h1>
        <button onClick={() => navigate("/search")} aria-label="Search">
          <svg viewBox="0 0 24 24">
            <circle cx="11" cy="11" r="7" />
            <path d="m20 20-4-4" />
          </svg>
        </button>
      </div>

      <section className="product-grid">
        {products.map(product => (
          <article className="product-card" key={product.id}>
            <label className="product-image">
              <span>Upload Image</span>
              <input type="file" accept="image/*" />
            </label>

            <input placeholder="Product name" />
            <input placeholder="Price" type="number" />
            <input placeholder="Discount" type="number" />
            <input placeholder="Category" />
            <input placeholder="Collection" />
            <input placeholder="Stock" type="number" />

            <button onClick={() => navigate(`/product/${product.id}`)}>
              View Product
            </button>
          </article>
        ))}
      </section>
    </main>
  );
};

export default Shop;