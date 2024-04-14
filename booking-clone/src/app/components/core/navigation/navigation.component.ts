import { AsyncPipe, NgClass } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnInit,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  NavigationStart,
  Router,
  RouterLink,
  RouterLinkActive,
} from '@angular/router';
import { DestroyDirective } from '@core/directives';
import { MapFacade } from '@store/map';
import { InputSwitchModule } from 'primeng/inputswitch';
import { BehaviorSubject, takeUntil } from 'rxjs';

import { links } from './constants';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [
    RouterLink,
    RouterLinkActive,
    FormsModule,
    InputSwitchModule,
    AsyncPipe,
    NgClass,
  ],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  hostDirectives: [DestroyDirective],
})
export class NavigationComponent implements OnInit {
  links = links;
  isMap$ = this.mapFacade.isMap$;
  checkedMap = false;
  currentRoute = new BehaviorSubject<string>(this.router.url);
  private destroy$ = inject(DestroyDirective).destroy$;

  constructor(
    private mapFacade: MapFacade,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.isMap$.pipe(takeUntil(this.destroy$)).subscribe((isMap) => {
      this.checkedMap = isMap;
    });

    this.router.events.pipe(takeUntil(this.destroy$)).subscribe((event) => {
      if (event instanceof NavigationStart) {
        this.currentRoute.next(event.url);
      }
    });
  }

  toggleMap(): void {
    this.mapFacade.toggleMap(this.checkedMap);
  }
}
