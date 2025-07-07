import { Routes } from "@angular/router";
import { StoreFrontLayoutComponent } from "./layouts/store-front-layout/store-front-layout.component";
import { HomePageComponent } from "./pages/home-page/home-page.component";
import { GenderPageComponent } from './pages/gender-page/gender-page.component';
import { ProductPageComponent } from "./pages/product-page/product-page.component";
import { NotFoundPageComponent } from "./pages/not-found-page/not-found-page.component";
import { RegisterLayoutComponent } from "@auth/layout/register-layout/register-layout.component";
import { RegisterPageComponent } from "@auth/pages/register-page/register-page.component";
import { CartPageComponent } from "./pages/cart-page/cart-page.component";

// ...existing code...
export const storeFrontRoutes: Routes = [
   {
      path: "register",
      component: RegisterLayoutComponent,
      children: [
        {
          path: "",
          component: RegisterPageComponent,

        }
      ]
    },


  {
    path: '',
    component: StoreFrontLayoutComponent,
    children: [
      {
        path: "",
        component: HomePageComponent,
      },
      {
        path: "gender/:gender",
        component: GenderPageComponent,
      },
      {
        path: "product/:idSlug",
        component: ProductPageComponent,
      },
      {
        path: "cart",
        component: CartPageComponent,
      },
      {
        path: "**",
        component: NotFoundPageComponent,
      },
    ],
  },

  {
    path: '**',
    redirectTo: '',
  },
];

export default storeFrontRoutes;
//
