import {Pipe, PipeTransform} from '@angular/core';
import {isDefined} from "@angular/compiler/src/util";

@Pipe({
    name: 'truncate'
})
export class TruncatePipe implements PipeTransform{
    transform(value: string, args: string) : string {
        let limit = parseInt(args);
        let trail = '...';

        return value.length > limit ? value.substring(0, limit) + trail : value;
    }
}