import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { InjectionToken, FactoryProvider } from "@angular/core";

export const WINDOW = new InjectionToken<Window>("window");

const windowProvider: FactoryProvider = {
  provide: WINDOW,
  useFactory: () => window,
};

export const WINDOW_PROVIDERS = [windowProvider];

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HomeComponent } from "./home/home.component";
import { CharactersComponent } from "./shared/characters/characters.component";
import { AbilityComponent } from "./shared/ability/ability.component";
import { SkillTreeComponent } from "./shared/skill-tree/skill-tree.component";
import { SkillComponent } from "./shared/skill/skill.component";
import { ClipboardModule } from "@angular/cdk/clipboard";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { AbilityContainerComponent } from './shared/ability-container/ability-container.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CharactersComponent,
    AbilityComponent,
    SkillTreeComponent,
    SkillComponent,
    AbilityContainerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSnackBarModule,
    ClipboardModule,
    MatIconModule,
    MatButtonModule,
  ],
  providers: [WINDOW_PROVIDERS],
  bootstrap: [AppComponent],
})
export class AppModule {}
