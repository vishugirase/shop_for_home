import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router';
import './App.css';
import AddProduct from './components/Add_Product';
import AddUser from './components/Add_User';
import AdminHomePage from './components/Admin_Home_Page';
import Bill from './components/Bill';

import Cartt from './components/Cartt';
import Category from './components/Category';
import Coupons from './components/Coupons';
import CurdProduct from './components/Crud_Product';
import CrudUsers from './components/Crud_Users';
import CrudUser from './components/Crud_Users';
import Furniture from './components/Furniture';
import Home from './components/Home';
import HomeDecor from './components/Home_Decor';
import KitchenDinning from './components/Kitchen_Dining';
import LoginUser from './components/Login';
import RegisterUser from './components/Register';
import SalesReport from './components/Sales_Report';
import SortHighToLow from './components/Sort_High_To-Low';
import SortLowToHigh from './components/Sort_Low_To_High';
import SortProduct from './components/Sort_Product';
import UpdateProduct from './components/Update_Product';
import UpdateUser from './components/Update_User';
import UserHomePage from './components/User_Home_Page';
import WishList from './components/WishList';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
  {/* <UserHomePage /> */}
  <Routes>
  <Route path='/' element={<Home />}> </Route>
  <Route path='/LoginRegister' element={<LoginUser />}> </Route>
  <Route path='/RegisterUser' element={<RegisterUser />}> </Route>
  <Route path='/UserHomePage' element={<UserHomePage />}> </Route>
  <Route path='/AdminHomePage' element={<AdminHomePage />}> </Route>
  <Route path='/CrudUsers' element={<CrudUsers />}> </Route>
  <Route path='/AddUser' element={<AddUser />}> </Route>
  <Route path='/UpdateUser/:userName' element={<UpdateUser />}> </Route>
  <Route path='CrudProduct' element={<CurdProduct />}> </Route>
  <Route path='AddProduct' element={<AddProduct />}> </Route>
  <Route path='/UpdateProduct/:productId' element={<UpdateProduct />}> </Route>
  <Route path='SalesReport' element={<SalesReport />}> </Route>
  <Route path='Category' element={<Category />}> </Route>
  <Route path='KitchenDinning' element={<KitchenDinning />}> </Route>
  <Route path='SortProduct' element={<SortProduct />}> </Route>
  <Route path='Coupons' element={<Coupons />}> </Route>
  <Route path='WishList' element={<WishList/>}> </Route>
  <Route path='HomeDecor' element={<HomeDecor />}> </Route>
  <Route path='Furniture' element={<Furniture />}> </Route>
  <Route path='Cartt' element={<Cartt />}> </Route>
  <Route path='Bill' element={<Bill />}> </Route>
  <Route path='SortLowToHigh' element={<SortLowToHigh />}> </Route>
  <Route path='SortHighToLow' element={<SortHighToLow  />}> </Route>
  <Route path='Navbar' element={<Navbar  />}> </Route>
  
  
  </Routes>
  </>
  );
}

export default App;
