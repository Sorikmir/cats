import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CatCardComponent } from './cat-card/cat-card.component';
import { CatsListComponent } from './cats-list/cats-list.component';
import { HomeComponent } from './home/home.component';
import { ContactsComponent } from './contacts/contacts.component';
import { NotFoundComponent } from './not-found/not-found.component';

export const routes: Routes = [
    {
        path: 'homepage',
        component: HomeComponent,
    },
    {
        path: 'cat-profile',
        component: CatCardComponent,
    },
    {
        path: 'cats-list',
        component: CatsListComponent,
    },
    {
        path: 'contacts',
        component: ContactsComponent,
    },
    {
        path: '**',
        component: NotFoundComponent,
    }
];
