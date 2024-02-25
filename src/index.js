import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import MainPage from "./routes/MainPage";
import Character from "./routes/Character";
import Book from "./routes/Book";
import Spell from "./routes/Spell"

const router = createBrowserRouter([
  { path: "/", element: <MainPage /> },
  { path: "/characters", element: <Character /> },
  { path: "/spells", element: <Spell /> },
  { path: "/books", element: <Book /> }
]);

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>
);
