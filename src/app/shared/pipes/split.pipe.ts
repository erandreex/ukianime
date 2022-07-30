import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'split',
})
export class SplitPipe implements PipeTransform {
    transform(value: string): string {
        const valor = value.split('_')[1];
        return valor[0].toUpperCase() + valor.substring(1);
    }
}
