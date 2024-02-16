import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import MainPage from "./routes/MainPage";
import Character from "./routes/Character";
import Spell from "./routes/Spell";
import Book from "./routes/Book";


const router = createBrowserRouter([
  { path: "/", element: <MainPage /> },
  { path: "character", element: <Character /> },
  { path: "spell", element: <Spell /> },
  { path: "book", element: <Book /> }
]);

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>
);
