import { Component } from '@angular/core';
import { HomeComponent } from '../../home/home.component';
import { CommonModule } from '@angular/common';
import { ProductsToBuyComponent } from '../../products-to-buy/products-to-buy.component';

@Component({
  selector: 'app-tabs',
  standalone: true,
  imports: [
    CommonModule,
    HomeComponent,
  ProductsToBuyComponent],
  template: `
    <div class="w-full">
      <div class="flex justify-center">
        <button class="btn sm:btn-sm md:btn-md lg:btn-lg" [ngClass]="{'btn-neutral': tab==1}" (click)="tab = 1">
          Home
        </button>
        <button class="btn sm:btn-sm md:btn-md lg:btn-lg" [ngClass]="{'btn-neutral': tab==2}" (click)="tab = 2">
          Prodotti da comprare
        </button>
      </div>
    </div>

    <!-- contenuti -->
    <div class="contents">
      @if (tab === 1) {
      <div class="py-10 px-6">
        <app-home/>
      </div>
      }@else {
      <div class="py-10 px-6">
        <app-products-to-buy/>
      </div>
      }
    </div>
  `,
  styles: ``,
})
export class TabsComponent {
  tab: number = 1;
}
