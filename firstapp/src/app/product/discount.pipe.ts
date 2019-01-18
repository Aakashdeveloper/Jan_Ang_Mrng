import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'discount'
})

export class DiscountedPipe implements PipeTransform {
    transform(value: number, rate: number) {
        value = value - rate;
        return value;
    }
}
