import { Routes } from '@angular/router';
import {loadRemoteModule} from "@angular-architects/module-federation"

export const routes: Routes = [
    { path: 'app', 
    loadComponent: () =>loadRemoteModule({
        type: 'module',
        remoteEntry: 'http://localhost:4201/remoteEntry.js',
        exposedModule: './MfeComponent'
    }).then(m => m.AppComponent).catch(err=>console.log("Error Catched:"+err)) },
    { path: 'mfe2', 
        loadComponent: () =>loadRemoteModule({
            type: 'module',
            remoteEntry: 'http://localhost:4202/remoteEntry.js',
            exposedModule: './Component'
        }).then(m => m.AppComponent).catch(err=>console.log("Error Catched:"+err)) }

];
