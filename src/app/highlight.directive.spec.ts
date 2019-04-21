import { HighlightDirective } from './highlight.directive';
import { Input, ElementRef, OnInit } from '@angular/core';
import { User } from './user-class/user';


describe('HighlightDirective', () => {
  it('should create an instance', () => {
    const directive = new HighlightDirective('user');
    expect(directive).toBeTruthy();
  });
});
