import { Provider } from "react-redux";
import "./App.css";
import Body from "./components/Body";
import appStore from "./utils/store/appStore";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainContainer from "./components/MainContainer";
import WatchPage from "./components/WatchPage";
import MyResumeCard from "./components/MyResumeCard";

function App() {
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
          path: "/resume",
          element: <MyResumeCard />,
        },
      ],
    },
  ]);
  return (
    <Provider store={appStore}>
      <div className="h-screen flex flex-col">
        <RouterProvider router={appRouter} />
      </div>
    </Provider>
  );
}

export default App;
