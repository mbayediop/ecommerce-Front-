import {Router, Routes} from "@angular/router";
import {ContainerComponent} from "./components/container/container.component";
import {SigninComponent} from "./components/authentification/signin/signin.component";
import {SignupComponent} from "./components/authentification/signup/signup.component";
import { UserAdminComponent } from "./components/admin/user-admin/user-admin.component";


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
    component: UserAdminComponent,
    pathMatch: 'full'
  },
]
