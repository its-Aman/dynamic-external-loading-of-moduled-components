import { Compiler, Component, Injector, SkipSelf, ViewChild, ViewContainerRef } from '@angular/core';

declare const SystemJS;

@Component({
    selector: 'myapp',
    template: `
        I am App Component
        <div>
            <ng-container #vc1></ng-container>
            <ng-container #vc2></ng-container>
        </div>
    `
})
export class CaAppComponent {
    @ViewChild('vc1', { read: ViewContainerRef }) vc1;
    @ViewChild('vc2', { read: ViewContainerRef }) vc2;

    constructor(private compiler: Compiler, @SkipSelf() private injector: Injector) {
    }

    ngOnInit() {
        SystemJS.import('a.module.js').then((module) => {
            debugger;
            const moduleFactory = this.compiler.compileModuleSync(module.default);
            const moduleRef = moduleFactory.create(this.injector);
            const widgets1 = moduleRef.injector.get('component-a1');
            const widgets2 = moduleRef.injector.get('component-a2');
            const resolver = moduleRef.componentFactoryResolver;

            const componentFactory1 = resolver.resolveComponentFactory(widgets1[0][0].component);
            const componentRef1 = this.vc1.createComponent(componentFactory1);
            componentRef1.instance.data = "AMAN KUMAR";

            const componentFactory2 = resolver.resolveComponentFactory(widgets2[0][0].component);
            this.vc2.createComponent(componentFactory2);
        })
    }
}