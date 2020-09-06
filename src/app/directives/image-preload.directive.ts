import { Directive, Input, HostBinding } from '@angular/core';
@Directive({
  // tslint:disable-next-line: directive-selector
  selector: 'img[default]',
  // tslint:disable-next-line: no-host-metadata-property
  host: {
    '(error)': 'updateUrl()',
    '(load)': 'load()',
    '[src]': 'src',
  },
})
export class ImagePreloadDirective {
  @Input() src: string;
  @Input() default: string;
  @HostBinding('class') className;

  updateUrl(): void {
    this.src = this.default;
  }
  load(): void {
    this.className = 'image-loaded';
  }
}
