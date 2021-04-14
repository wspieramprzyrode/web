import { TestBed } from '@angular/core/testing';

import { AdminGroupAuthGuard } from './admin-group-auth.guard';

describe('AdminGroupAuthGuard', () => {
  let guard: AdminGroupAuthGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AdminGroupAuthGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
