import {
  AfterContentChecked,
  AfterContentInit, AfterViewChecked, AfterViewInit,
  Component, ContentChild,
  DoCheck, ElementRef,
  Input,
  OnChanges, OnDestroy,
  OnInit,
  SimpleChanges, ViewChild,
  ViewEncapsulation
} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class ServerElementComponent implements
  OnInit,
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy
{
  @Input('srvElement') element : {
    type: string,
    name: string,
    content: string
  };
  @Input() name: string;
  constructor() {
    console.log('constructor called!');
  }
  @ViewChild('heading') header: ElementRef;
  @ContentChild('contentParagraph') paragraph: ElementRef;
  ngOnChanges(changes:SimpleChanges) {
    console.log('ngOnChanges called!');
    console.log(changes);
  }

  ngOnInit() {
    console.log('ngOnInit called!');
  }

  ngDoCheck() {
    console.log('ngDoCheck called!');
  }
  ngAfterContentInit() {
    console.log('ngAfterContentInit called!');
  }
  ngAfterContentChecked() {
    console.log('ngAfterContentInit called!');
  }
  ngAfterViewInit() {
    console.log('ngAfterContentInit called!');
    console.log('Text content: ' + this.header.nativeElement.textContent);
    console.log('Text content of paragraph: ' + this.paragraph.nativeElement.textContent);
  }
  ngAfterViewChecked() {
    console.log('ngAfterContentInit called!');
  }
  ngOnDestroy() {
    console.log('ngAfterContentInit called!');
  }
}
