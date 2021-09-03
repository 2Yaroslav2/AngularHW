import { Component, OnDestroy } from '@angular/core';
import { of } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { destroySubjectMixin } from '../shared/mixin/destroy-subject.mixin';
import { AuthService } from './components/auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent extends destroySubjectMixin() implements OnDestroy {

  constructor(private authService: AuthService) {

    super();

     of([]).pipe(takeUntil(this.destroy$)).subscribe();

  }
  ngOnDestroy() { }
}
