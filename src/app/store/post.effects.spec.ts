import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable, of } from 'rxjs';

import { PostEffects } from './post.effects';

describe('PostEffects', () => {
  const actions$: Observable<any> = of('');
  let effects: PostEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        PostEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject(PostEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
