import { Component, Input } from '@angular/core';

@Component({
    selector: 'comp-a1',
    template: 'I am widget Component A1 R1 -- {{data}} --'
})
export class ComponentA1 {

    @Input() data: string;
}