import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'myUpper'
})

export class MyPipe implements PipeTransform {
    transform(value: string, typev: string) {
        if (typev === 'upper') {
            value = value.toUpperCase();
        } else {
            value = value.toLowerCase();
        }
        return value;
    }
}
