import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {NgModule} from '@angular/core';
import {MaterialModule} from './material.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {SidebarComponent} from './sidebar/sidebar.component';
import {LayoutModule} from '@angular/cdk/layout';
import {MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule} from '@angular/material';
import {ChatAreaComponent} from './chat-area/chat-area.component';
import {LoginComponent} from './login/login.component';
import {DataService} from './services/data.service';
import {AuthGuard} from './auth.guard';
import {RouteModule} from './route/route.module';

@NgModule({
    declarations: [
        AppComponent,
        SidebarComponent,
        ChatAreaComponent,
        LoginComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        MaterialModule,
        BrowserAnimationsModule,
        LayoutModule,
        MatToolbarModule,
        MatButtonModule,
        MatSidenavModule,
        MatIconModule,
        MatListModule,
        RouteModule
    ],
    providers: [DataService, AuthGuard],
    bootstrap: [AppComponent]
})
export class AppModule {
}
