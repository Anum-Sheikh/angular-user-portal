import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router'
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { LayoutComponent } from './layout/layout.component';

const appRoutes: Routes = [
    { path: '',   redirectTo: '/login', pathMatch: 'full'},
    { path: 'login',   component: LoginComponent },
    { path: 'signup',   component: SignupComponent },
    // {   path: '',   component: LayoutComponent,
    //     children: [
    //     { path: '', redirectTo: '/dashboard/dashboard1', pathMatch: 'full' },
    //     { path: 'dashboard', loadChildren: './layout/layout.module#LayoutModule' },
    //     ]
    // },
    { path: '**', redirectTo: '' }
  ];

@NgModule({
    declarations: [],
    imports: [

    RouterModule.forRoot(appRoutes, 
        // { enableTracing: true } 
        )// <-- debugging purposes only)
    ],
    exports: [RouterModule]
  })

export class AppRoutingModule { }