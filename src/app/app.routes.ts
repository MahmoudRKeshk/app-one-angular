import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { PortofolioComponent } from './portofolio/portofolio.component';
import { GalleryComponent } from './gallery/gallery.component';

export const routes: Routes = [
  {path: "", redirectTo : "home" , pathMatch:"full"},
  {path: "home" , component : HomeComponent},
  {path: "about" , component : AboutComponent},
  {path: "contact" , component : ContactComponent},
  {path: "portofolio" , component : PortofolioComponent},
  {path: "gallery" , component : GalleryComponent},
  {path: "**" , component : HomeComponent}
];