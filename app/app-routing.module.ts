import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {WelcomeComponent} from "./home/welcome.component";
/**
 * Created by SSMacProHasael on 1/29/17.
 */

@NgModule({
    imports: [
        RouterModule.forRoot([
            {
                path: 'welcome',
                component: WelcomeComponent
            },
            {
                path: '',
                redirectTo: 'welcome',
                pathMatch: 'full'
            },
            {
                path: '**',
                redirectTo: 'welcome',
                pathMatch: 'full'
            },
        ]),
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }