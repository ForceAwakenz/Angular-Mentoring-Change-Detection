import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-left-branch-child1',
  templateUrl: './left-branch-child1.component.html',
  styleUrls: ['./left-branch-child1.component.css']
})
export class LeftBranchChild1Component implements OnInit {
@Input() random!: number;
  constructor() { }

  ngOnInit(): void {
  }

}
