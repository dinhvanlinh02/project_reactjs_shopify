
import AllCategory from "./pages/AllCategory";
import AllProducts from "./pages/AllProducts";
import CategoryProducts from "./pages/CategoryProducts";
import Home from "./pages/home";
import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import ProductDetail from "./pages/ProductDetail";
import Profile from "./pages/Profile";
import WishList from "./pages/WishList";
import LayOut from "./components/Layout/Index";
import { Provider } from "react-redux";
import { store } from './store'
const router = createBrowserRouter([
  {
    path: "/",
    element: <LayOut />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "products",
        element: <AllProducts />,
      },
      {
        path: "categories",
        element: <AllCategory />,
      },
      {
        path: "category/:categoryType",
        element: <CategoryProducts />,
      },
      {
        path: "product/:id",
        element: <ProductDetail />,
      },
      {
        path: "account",
        element: < Profile />,
      },
      {
        path: "wishlist",
        element: < WishList />,
      },
    ]
  },

]);
function App() {
  return (
    <div>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>


    </div>
  );
}
export default App;
