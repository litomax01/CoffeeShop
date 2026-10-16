// =============================================================
// USD PRICE PIPE — La Esquina de la 24
// Formatea precios en dólares con símbolo y dos decimales
// =============================================================

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'usdPrice',
  standalone: true,
  pure: true,
})
export class UsdPricePipe implements PipeTransform {
  transform(amount: number | null | undefined): string {
    if (amount === null || amount === undefined || isNaN(amount)) {
      return '—';
    }
    return `$${amount.toFixed(2)}`;
  }
}
