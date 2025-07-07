import { CommonModule } from '@angular/common';
import { Component, computed, input, linkedSignal } from '@angular/core';
import { RouterLink } from '@angular/router';



@Component({
  selector: 'app-pagination',
  imports: [RouterLink, CommonModule],
  templateUrl: './pagination.component.html',

})
export class PaginationComponent {
  pages = input(0);
  currentPage = input<number>(1);
  activePage = linkedSignal(this.currentPage);
  spacing = input(true);

  getPagesList = computed(() => {
    return Array.from({ length: this.pages() }, (_, i) => i + 1);
  });




}
