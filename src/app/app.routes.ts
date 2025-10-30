import { Routes } from '@angular/router';
import { Login } from './Tourism/signup/login/login';
import { Signup } from './Tourism/signup/signup/signup';
import { City } from './Tourism/cities/city/city';
import { CityDetails } from './Tourism/cities/city-details/city-details';
import { AllCom } from './Tourism/all-com/all-com';
import { Slidingimaes } from './Tourism/navbar/slidingimaes/slidingimaes';
import { AllData } from './Tourism/all-data/all-data';
import { SlidingImagesText } from './Tourism/sliding-images-text/sliding-images-text';
import { Images } from './payment/images/images';
import { Sidebar } from './admin-panel/sidebar/sidebar';
import { AllComAdmin } from './admin-panel/all-com-admin/all-com-admin';
import { AdminCities } from './admin-panel/admin-cities/admin-cities';
import { Orders } from './admin-panel/orders/orders';
import { OrderDetails } from './admin-panel/order-details/order-details';
import { CitiesData } from './admin-panel/cities-data/cities-data';
import { Users } from './admin-panel/users/users';
import { AddProdcts } from './admin-panel/add-prodcts/add-prodcts';
import { SafariTable } from './admin-panel/safari-table/safari-table';
import { EditProducts } from './admin-panel/edit-products/edit-products';
import { AddAdmin } from './admin-panel/add-admin/add-admin';

export const routes: Routes = [
  {
    path: '',
    component: AllCom,
    children: [
      { path: '', component: AllData },
      { path: 'slide-img', component: Slidingimaes },
      {
        path: 'login',
        component: Login,
      },
      {
        path: 'signup',
        component: Signup,
      },
      {
        path: 'city',
        component: City,
      },
      {
        path: 'city-deails/:cityName',
        component: CityDetails,
      },
      {
        path: 'product-deails/:id',
        component: SlidingImagesText,
      },
      {
        path: 'payment-images',
        component: Images,
      },
    ],
  },

  {
    path: 'admin',
    component: Sidebar,
    children: [
      {
        path: '',
        component: AllComAdmin,
      },
      {
        path: 'orders',
        component: Orders,
      },
      {
        path: 'add-products',
        component: AddProdcts,
      },
      {
        path: 'safari-table',
        component: SafariTable,
      },
      {
        path: 'cities',
        component: CitiesData,
      },
      {
        path: 'users',
        component: Users,
      },
      {
        path: 'orders-details/:id',
        component: OrderDetails,
      },
      {
        path: 'edit-product/:id',
        component: EditProducts,
      },
      {
        path: 'Add-admin',
        component: AddAdmin,
      },
    ],
  },
];
