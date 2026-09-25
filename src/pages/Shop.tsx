import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

const products = Array.from({ length: 12 }, (_, id) => ({
  id,
  name: `Product ${id + 1}`,
  price: "₦0",
  image: ""
}));

const Shop = () => {
  const navigate = useNavigate();
  const [items, setItems] = useState(products);
  const fileRefs = useRef<(HTMLInputElement | null)[]>([]);

  const updateProduct = (id: number, field: "name" | "price", value: string) => {
    setItems(items =>
      items.map(item =>
        item.id === id ? { ...item, [field]: value } : item
      )
    );
  };

  const uploadImage = (id: number, file?: File) => {
    if (!file) return;

    const image = URL.createObjectURL(file);

    setItems(items =>
      items.map(item =>
        item.id === id ? { ...item, image } : item
      )
    );
  };

  const removeImage = (id: number) => {
    setItems(items =>
      items.map(item =>
        item.id === id ? { ...item, image: "" } : item
      )
    );
  };

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
        {items.map(product => (
          <article
            className="product-card"
            key={product.id}
            onDoubleClick={() => navigate(`/product/${product.id}`)}
          >
            <input
              ref={element => {
                fileRefs.current[product.id] = element;
              }}
              type="file"
              accept="image/*"
              hidden
              onChange={event =>
                uploadImage(product.id, event.target.files?.[0])
              }
            />

            <div className="product-image-wrap">
              <button
                className="product-image"
                onClick={() => fileRefs.current[product.id]?.click()}
              >
                {product.image ? (
                  <img src={product.image} alt={product.name} />
                ) : (
                  <span>Tap to upload</span>
                )}
              </button>

              {product.image && (
                <button
                  className="remove-image"
                  onClick={event => {
                    event.stopPropagation();
                    removeImage(product.id);
                  }}
                >
                  −
                </button>
              )}
            </div>

            <div className="product-info">
              <input
                value={product.name}
                onChange={event =>
                  updateProduct(product.id, "name", event.target.value)
                }
                onDoubleClick={event => event.stopPropagation()}
              />

              <input
                value={product.price}
                onChange={event =>
                  updateProduct(product.id, "price", event.target.value)
                }
                onDoubleClick={event => event.stopPropagation()}
              />
            </div>
          </article>
        ))}
      </section>
    </main>
  );
};

export default Shop;