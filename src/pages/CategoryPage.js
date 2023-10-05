import { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import {
  getProductsDone,
  getProductsError,
  getProductsInit
} from "../store/products";
import Loader from "../components/Loader";
import ProductCard from "../components/ProductCart";

function CategoryPage() {
  const dispatch = useDispatch();
  const { categoryName } = useParams();
  const { isLoading, loadError, data } = useSelector((state) => state.products);

  const loadProducts = useCallback(() => {
    if (data[categoryName] && data[categoryName].length > 0) return;

    dispatch(getProductsInit());

    fetch(`https://fakestoreapi.com/products/category/${categoryName}`)
      .then((resp) => resp.json())
      .then((result) => dispatch(getProductsDone(categoryName, result)))
      .catch((error) => dispatch(getProductsError(error)));
  }, [data, categoryName]);

  useEffect(() => {
    loadProducts();
  }, [categoryName]);

  const list = data[categoryName];
  if (isLoading) {
    return <Loader />;
  } else if (loadError) {
    return <div>Error! {loadError.message}</div>;
  } else if (list && list.length > 0) {
    return (
      <div className="products-list">
        {list.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    );
  } else {
    return <div>No products in current category</div>;
  }
}

export default CategoryPage;
