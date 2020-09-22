import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WelcomeRoutingModule } from './welcome-routing.module';
import { WelcomeComponent } from './welcome/welcome.component';
import { MatCardModule } from '@angular/material/card';
import { HeroComponent } from './hero/hero.component';
import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [WelcomeComponent, HeroComponent, AboutComponent],
  imports: [CommonModule, WelcomeRoutingModule, MatCardModule],
})
export class WelcomeModule {}
