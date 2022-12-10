import {Router, Routes} from "@angular/router";
import {SigninComponent} from "./components/authentification/signin/signin.component";
import {SignupComponent} from "./components/authentification/signup/signup.component";
import {SidebarsComponent} from "./components/admin/sidebars/sidebars.component";
import {ContainerComponent} from "./components/container/container.component";


export const ROUTES : Routes = [
  {
    path: "",
    component: ContainerComponent,
    pathMatch: 'full'
  },

  {
    path: "signin",
    component: SigninComponent,
    pathMatch: 'full'
  },
  {
    path: "signup",
    component: SignupComponent,
    pathMatch: 'full'
  },
  {
    path: "user",
    component: SidebarsComponent,
    pathMatch: 'full'
  },
]
