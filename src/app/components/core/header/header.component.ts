import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { NavigationMobileComponent } from '../navigation-mobile';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, NavigationMobileComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {}
