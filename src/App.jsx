import { Routes, Route } from "react-router-dom";
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ProductGrid from './components/ProductGrid'
import ProductDetails from "./pages/ProductDetails";
import AppRoutes from "./routes/AppRoutes";


export default function App() {
  return <AppRoutes />;
}

