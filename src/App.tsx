import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import StoreLayout from "./layouts/StoreLayout";
import DashboardLayout from "./layouts/DashboardLayout";
import Home from "./pages/store/Home";
import Products from "./pages/store/Products";
import ProductDetail from "./pages/store/ProductDetail";
import Cart from "./pages/store/Cart";
import OrderTracking from "./pages/store/OrderTracking";
import Login from "./pages/store/Login";
import Signup from "./pages/store/Signup";
import VendorDashboard from "./pages/vendor/VendorDashboard";
import CreateProduct from "./pages/vendor/CreateProduct";
import AllProducts from "./pages/vendor/AllProducts";
import VendorOrders from "./pages/vendor/VendorOrders";
import AdminDashboard from "./pages/admin/AdminDashboard";
import AdminLogin from "./pages/admin/AdminLogin";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route element={<StoreLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/:slug" element={<ProductDetail />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/order/:id" element={<OrderTracking />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Route>

          <Route path="/admin/login" element={<AdminLogin />} />

          <Route element={<DashboardLayout role="vendor" />}>
            <Route path="/vendor" element={<VendorDashboard />} />
            <Route path="/vendor/create-product" element={<CreateProduct />} />
            <Route path="/vendor/products" element={<AllProducts />} />
            <Route path="/vendor/orders" element={<VendorOrders />} />
          </Route>

          <Route element={<DashboardLayout role="admin" />}>
            <Route path="/admin" element={<AdminDashboard />} />
          </Route>

          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
