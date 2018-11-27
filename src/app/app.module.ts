import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomCardComponent } from './custom-card/custom-card.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import { LoginComponent } from './login/login.component';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import { UsersComponent } from './admin-layout/users/users.component';
import { GroupsComponent } from './admin-layout/groups/groups.component';
import { UsersDetailsComponent } from './admin-layout/users/users-details/users-details.component';
import { UsersFormComponent } from './admin-layout/users/users-form/users-form.component';
import { GroupsDetailsComponent } from './admin-layout/groups/groups-details/groups-details.component';
import { GroupsFormComponent } from './admin-layout/groups/groups-form/groups-form.component';
import {RouterModule, Routes} from "@angular/router";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";

const appRoutes: Routes = [
    { path: 'login', component: LoginComponent},
    { path: 'admin', component: AdminLayoutComponent, children: [
            { path: 'users', component: UsersComponent },
            { path: 'users/new', component: UsersFormComponent },
            { path: 'users/:id', component: UsersDetailsComponent },
            { path: 'users/:id/edit', component: UsersFormComponent },
            { path: 'groups', component: GroupsComponent },
            { path: 'groups/new', component: GroupsFormComponent },
            { path: 'groups/:id', component: GroupsDetailsComponent },
            { path: 'groups/:id/edit', component: GroupsFormComponent }
        ]},
    { path: '**', redirectTo: 'login'}
]

@NgModule({
    declarations: [
        AppComponent,
        CustomCardComponent,
        LoginComponent,
        AdminLayoutComponent,
        UsersComponent,
        GroupsComponent,
        UsersDetailsComponent,
        UsersFormComponent,
        GroupsDetailsComponent,
        GroupsFormComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatIconModule,
        MatToolbarModule,
        MatButtonModule,
        RouterModule.forRoot(appRoutes),
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
