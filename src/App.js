import "./App.css";

import Header from "./components/Header";

import Body from "./components/Body";

import { Provider } from "react-redux";
import store from "./utils/store";
import MainContainer from "./components/MainContainer";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import WatchPage from "./components/WatchPage";
import Shimmer from "./components/Shimmer";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/",
        element: <MainContainer />,
      },
      {
        path: "/watch",
        element: <WatchPage />,
      },
      {
        path: "/shimmer",
        element: <Shimmer />,
      },
    ],
  },
]);

function App() {
  return (
    <Provider store={store}>
      <Header />
      <RouterProvider router={appRouter} />
      {/* here my components will change according to my app Router */}
    </Provider>
  );
}

export default App;
