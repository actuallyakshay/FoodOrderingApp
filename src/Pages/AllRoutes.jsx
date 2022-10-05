import { Route, Routes } from "react-router-dom";
import FoodCompo from "../Component/FoodListCompo";
import ContinueLogin from "../LOGIN/PhoneSignup";
import LoginPage from "../LOGIN/SignupPage";
import CartPage from "./CartPage";
import FoodList from "./FoodList";
import LandingPage from "./LandingPage";
import MealOfTheDay from "./MealOfTheDay";
import SearchBox from "./SearchPage";
import TrendingPage from "./TrendingPage";

export default function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />}></Route>
      <Route path="/food" element={<FoodCompo />}></Route>
      <Route path="/cart" element={<CartPage />}></Route>
      <Route path="/foodlist" element={<FoodCompo />}></Route>
      <Route path="/trendingpage" element={<TrendingPage />}></Route>
      <Route path="/mealday" element={<MealOfTheDay />}></Route>
      <Route path="/search" element={<SearchBox />}></Route>
      <Route path="/login" element={<LoginPage />}></Route>
      <Route path="/phonelogin" element={<ContinueLogin />}></Route>
    </Routes>
  );
}
