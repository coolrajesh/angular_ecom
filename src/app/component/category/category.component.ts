import { Component, OnInit } from '@angular/core';
import {TableRows, Employee} from './category-data';


@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {

  trow:TableRows[];
  constructor() {this.trow=Employee; }

  ngOnInit(): void {

    
  }

}
