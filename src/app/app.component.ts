import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TabsComponent } from './shared/tabs/tabs.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TabsComponent],
  template: `
  <app-tabs/>
  `,
  styles: [],
})
export class AppComponent {
  title = 'shopping-list';
}
