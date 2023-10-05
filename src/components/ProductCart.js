import AddToCart from "./AddToCart";

function ProductCard({ product }) {
  return (
    <div className="product-card">
      <div className="product-image">
        <img alt={product.title} src={product.image} />
      </div>
      <div className="product-details">
        <div className="product-title">{product.title}</div>
        <div className="product-buy">
          <div className="product-price">${product.price}</div>
          <AddToCart product={product} />
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
