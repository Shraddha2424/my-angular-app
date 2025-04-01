import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { NgModel } from '@angular/forms';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProfileComponent } from './profile/profile.component';
import { UserComponent } from './user/user.component';
export const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component:AboutComponent},
  { path: 'contact', component:ContactComponent},
  { path: 'login', component:LoginComponent},
  {path:'profile',component:ProfileComponent,data:{name:'anillll'}},// pass data with router
  {path:'user/:id/:name', component:UserComponent},
  { path:'**', component:PageNotFoundComponent}
   
   // Default route


];
