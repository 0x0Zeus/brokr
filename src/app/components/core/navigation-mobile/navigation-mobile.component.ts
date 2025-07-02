import { NgClass } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

import { links } from '../navigation/constants';

@Component({
  selector: 'app-navigation-mobile',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, NgClass],
  templateUrl: './navigation-mobile.component.html',
  styleUrl: './navigation-mobile.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavigationMobileComponent {
  links = links;
  isActiveHamburger = false;

  toggleHamburger(): void {
    this.isActiveHamburger = !this.isActiveHamburger;
  }
}
