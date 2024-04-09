import { AsyncPipe } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnInit,
} from '@angular/core';
import { AttractionComponent } from '@components/attractions/attraction';
import { MiniLoaderComponent } from '@components/shared/mini-loader';
import { DestroyDirective } from '@core/directives';
import { IAttractionsSearchParams } from '@shared/interfaces/attractions';
import { AttractionsFacade } from '@store/attractions';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { takeUntil } from 'rxjs';

@Component({
  selector: 'app-attractions',
  standalone: true,
  imports: [
    AttractionComponent,
    ProgressSpinnerModule,
    AsyncPipe,
    MiniLoaderComponent,
  ],
  templateUrl: './attractions.component.html',
  styleUrl: './attractions.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  hostDirectives: [DestroyDirective],
})
export class AttractionsComponent implements OnInit {
  attractions$ = this.attractionsFacade.attractions$;
  isLoadingAttractions$ = this.attractionsFacade.attractionsIsLoading$;
  attractionsSearchParams$ = this.attractionsFacade.attractionsSearchParams$;
  attractionsSearchParams: null | IAttractionsSearchParams = null;
  private destroy$ = inject(DestroyDirective).destroy$;

  constructor(private attractionsFacade: AttractionsFacade) {}

  ngOnInit(): void {
    this.attractionsSearchParams$
      .pipe(takeUntil(this.destroy$))
      .subscribe((searchParams) => {
        this.attractionsSearchParams = searchParams;
      });
  }

  setNextPage(): void {
    if (this.attractionsSearchParams) {
      this.attractionsFacade.fetchAttractions({
        ...this.attractionsSearchParams,
        page: this.attractionsSearchParams.page + 1,
      });
    }
  }
}
