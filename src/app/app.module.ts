import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { CONST_ROUTING } from './app.routing';
import { RegisterAttackComponent } from './register-attack/register-attack.component';
import { RegisterThreatsComponent } from './register-threats/register-threats.component';
import { AttackHistoryComponent } from './attack-history/attack-history.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    RegisterAttackComponent,
    RegisterThreatsComponent,
    AttackHistoryComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    CONST_ROUTING
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
