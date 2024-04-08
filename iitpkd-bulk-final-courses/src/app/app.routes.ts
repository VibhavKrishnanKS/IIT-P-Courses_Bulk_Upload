import { Routes } from '@angular/router';
import { HomeComponent } from './page/home/home.component';
import { PersonalinfoComponent } from './page/personalinfo/personalinfo.component';
import { UploadComponent } from './page/upload/upload.component';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    {path: 'home', component: HomeComponent},
    {path: 'home/courses', component: PersonalinfoComponent},
    {path: 'home/courses/upload', component: UploadComponent}
];
