import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss'],
})
export class ChildComponent implements OnInit {
  changesSaved = false;
  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {}
  savedChanges() {
    this.changesSaved = true;
    this.router.navigate(['../'], { relativeTo: this.route });
  }
}
