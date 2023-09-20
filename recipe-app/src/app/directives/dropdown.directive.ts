import { Directive, ElementRef, HostBinding, HostListener, Renderer2 } from "@angular/core";

@Directive({
    selector: "[appDropdown]"
})

export class DropdownDirective{
    @HostBinding('class.show') classes: boolean = false;

    constructor(private elementRef: ElementRef, private rendered: Renderer2){       
    }

    @HostListener('click') onClick(){
        this.classes = !this.classes; 
    }
}