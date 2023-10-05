import { useCallback, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import {
  getCategoriesDone,
  getCategoriesError,
  getCategoriesInit
} from "../store/categories";
import Loader from "./Loader";

function CategoryBar() {
  const dispatch = useDispatch();
  const { loadError, isLoading, list } = useSelector(
    (state) => state.categories
  );

  const loadCategories = useCallback(() => {
    // dispatch(fetchCategories());
    dispatch(getCategoriesInit());
    fetch("https://fakestoreapi.com/products/categories")
      .then((resp) => resp.json())
      .then((result) => {
        dispatch(getCategoriesDone(result));
      })
      .catch((error) => {
        dispatch(getCategoriesError(error));
      });
  }, [dispatch]);

  useEffect(() => {
    loadCategories();
  }, [loadCategories]);

  function ui() {
    if (isLoading) {
      return <Loader />;
    } else if (loadError) {
      return <div>{loadError.message}</div>;
    } else {
      return (
        <div className="category-items">
          {list.map((categoryName) => (
            <NavLink
              key={categoryName}
              className="category-item"
              activeClassName="selected"
              to={`/category/${categoryName}`}
            >
              {categoryName}
            </NavLink>
          ))}
        </div>
      );
    }
  }

  return <div className="category-bar">{ui()}</div>;
}

export default CategoryBar;
