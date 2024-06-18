import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  template: `
   <div class="hero min-h-screen">
  <div class="hero-content text-center">
    <div class="max-w-md">
      <h1 class="text-5xl font-bold">Shopping List</h1>
      <p class="py-6">Facilitati la vita compilando la lista della spesa interattiva!</p>
    
    </div>
  </div>
</div>
  `,
  styles: ``
})
export class HomeComponent {

}
