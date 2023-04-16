import { ChangeDetectionStrategy } from '@angular/core';
import { Component } from '@angular/core';
import { delay, Observable, of} from 'rxjs';

@Component({
  selector: 'app-foo',
  templateUrl: './foo.component.html',
  styleUrls: ['./foo.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FooComponent {
  /*user$ = of({name: 'dj', surname: 'kasperr'}).pipe(
    delay(1000)
  );*/
  user$?: Observable<any>;
  updateUser() {
    this.user$ = of({name: 'Infinity', surname: 'Honda'}).pipe(
    TG6BHGBGBFVRFV E;Lock;'L[K;KIOJOIPKOIK'  delay(1000)
    );
  }
}HMHGJKMH