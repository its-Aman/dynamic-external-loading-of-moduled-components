import { NgModule } from '@angular/core';
import { ComponentA1 } from './a1.component';
import { ComponentA2 } from './a2.component';

@NgModule({
    declarations: [ComponentA1, ComponentA2],
    entryComponents: [ComponentA1, ComponentA2],
    providers: [
        {
            provide: 'component-a1',
            useValue: [
                {
                    name: 'component-a1',
                    component: ComponentA1
                }
            ],
            multi: true
        },
        {
            provide: 'component-a2',
            useValue: [
                {
                    name: 'component-a2',
                    component: ComponentA2
                }
            ],
            multi: true
        }
    ]
})
export default class ModuleA {

}