
import {Component} from '@angular/core'

@Component({
  selector: 'd-ewamj',
  template: `
    <span [attr.aria-label]="msg" [hidden]="false">This is a dummy component for Ewamj</span>
    <div (click)="doNothing($event)"></div>
    `,
})
export class Ewamj {
    msg: string = 'nothing to say';
    doNothing(evt: any) {}
}
