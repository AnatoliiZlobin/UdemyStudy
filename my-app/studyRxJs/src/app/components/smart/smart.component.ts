import { ChangeDetectionStrategy, Component } from '@angular/core';
import { delay, map, of } from 'rxjs';

export interface User {
  name: string;
  surname: string;
}

@Component({
  selector: 'app-smart',
  templateUrl: './smart.component.html',
  styleUrls: ['./smart.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SmartComponent {
  value = Promise.resolve(12);
  value$ = of(42);

  name$ = of('DJ').pipe(delay(1500))
  user$ = of({name: 'DJ', surname: 'kasperr'}).pipe(delay(1500));

  newUser$ = this.user$.pipe(
    map(user => ({...user, name: '___' + user.name + '___'}))
  );

  array$ = of([1,2,3,4,5]);

  onItemClick(item: number, items: number[]) {
    console.log('onItemClick', item, items)
  }

  onDelete(user: User) {
    alert('User has been deleted. User name: ' + user.name)
  }
}
