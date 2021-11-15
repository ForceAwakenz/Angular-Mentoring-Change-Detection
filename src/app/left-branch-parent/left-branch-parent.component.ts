import { Component, OnInit } from '@angular/core';
import { RandomNumberService } from '../random-number.service';

@Component({
  selector: 'app-left-branch-parent',
  templateUrl: './left-branch-parent.component.html',
  styleUrls: ['./left-branch-parent.component.css']
})
export class LeftBranchParentComponent implements OnInit {
getRandom!: () => number;

  constructor(private rnd: RandomNumberService) {}

  ngOnInit(): void {
    this.getRandom = this.rnd.returnRandomNumber;
  }

}
