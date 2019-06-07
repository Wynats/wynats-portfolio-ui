import { Input } from '@angular/core';

export abstract class BaseComponent<T, K> {
  @Input() config: T;
  @Input() data: K;
}
