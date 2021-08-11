import { TestBed } from '@angular/core/testing';

import { AuthIntercInterceptor } from './auth-interc.interceptor';

describe('AuthIntercInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      AuthIntercInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: AuthIntercInterceptor = TestBed.inject(AuthIntercInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
