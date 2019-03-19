import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AuthGuard} from '../auth.guard';
import {RouteRoutingModule} from './route-routing.module';
import {RouterModule, Routes} from '@angular/router';
import {ChatAreaComponent} from '../chat-area/chat-area.component';
import {LoginComponent} from '../login/login.component';

const routes: Routes = [
    // Fallback route if logged in
    {path: '', redirectTo: 'chat', pathMatch: 'full'},
    // Dashboard with Subroutes
    {
        path: 'chat', component: ChatAreaComponent, canActivate: [AuthGuard], children: [
            {path: '', component: ChatAreaComponent},
            {path: '**', redirectTo: 'chat'}
        ]
    },
    {path: 'login', component: LoginComponent},
    // Fallback route if not logged in
    {path: '**', redirectTo: 'chat'}
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class RouteModule {
}
