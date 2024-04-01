import { AsyncPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { LoaderComponent } from '@components/shared/loader';
import { StayComponent } from '@components/stays/stay';
import { StaysFacade } from '@store/stays';

@Component({
  selector: 'app-stays',
  standalone: true,
  imports: [StayComponent, AsyncPipe, LoaderComponent],
  templateUrl: './stays.component.html',
  styleUrl: './stays.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StaysComponent {
  stays$ = this.staysFacade.stays$;
  isLoadingStays$ = this.staysFacade.staysIsLoading$;

  constructor(private staysFacade: StaysFacade) {}
}
