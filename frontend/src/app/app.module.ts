import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TaskService } from './services/task.service';

/**
 * Module racine de l'application Angular
 * 
 * @NgModule configure l'application :
 * - declarations : composants, directives, pipes
 * - imports : modules Angular nécessaires
 * - providers : services injectables
 * - bootstrap : composant à démarrer
 */
@NgModule({
  declarations: [
    AppComponent  // Notre composant principal
  ],
  imports: [
    BrowserModule,      // Module de base pour applications web
    HttpClientModule,   // Module pour faire des requêtes HTTP
    FormsModule         // Module pour ngModel (two-way binding)
  ],
  providers: [
    TaskService         // Service disponible dans toute l'application
  ],
  bootstrap: [AppComponent]  // Composant racine
})
export class AppModule { }
