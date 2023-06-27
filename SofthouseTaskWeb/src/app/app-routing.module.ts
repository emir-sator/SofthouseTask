import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DogsComponent } from "./components/dogs/dogs.component";
import { HomeComponent } from "./components/home/home.component";
import { FavouritesComponent } from "./components/favourites/favourites.component";

const routes: Routes = [
    { path: '', component: HomeComponent},
    { path: 'dogs', component: DogsComponent},
    { path: 'favourites', component: FavouritesComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }