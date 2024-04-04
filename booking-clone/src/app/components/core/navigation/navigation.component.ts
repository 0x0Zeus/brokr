import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnInit,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { DestroyDirective } from '@core/directives';
import { MapFacade } from '@store/map';
import { InputSwitchModule } from 'primeng/inputswitch';
import { takeUntil } from 'rxjs';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, FormsModule, InputSwitchModule],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  hostDirectives: [DestroyDirective],
})
export class NavigationComponent implements OnInit {
  isMap$ = this.mapFacade.isMap$;
  checkedMap = false;
  private destroy$ = inject(DestroyDirective).destroy$;

  constructor(private mapFacade: MapFacade) {}

  ngOnInit(): void {
    this.isMap$.pipe(takeUntil(this.destroy$)).subscribe((isMap) => {
      this.checkedMap = isMap;
    });
  }

  toggleMap(): void {
    this.mapFacade.toggleMap(this.checkedMap);
  }
}
