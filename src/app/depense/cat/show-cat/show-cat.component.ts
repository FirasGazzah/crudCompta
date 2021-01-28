import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import {Observable} from 'rxjs';
import {Categorie} from '../../../shared/models/depense';
import {DepenseService} from '../../../shared/services/depense.service';
import {NestedTreeControl} from '@angular/cdk/tree';
import {ArrayDataSource} from '@angular/cdk/collections';
import {FormArray, FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-show-cat',
  templateUrl: './show-cat.component.html',
  styleUrls: ['./show-cat.component.scss']
})
export class ShowCatComponent implements OnInit {
  todo = [
    'Get to work',
    'Pick up groceries',
    'Go home',
    'Fall asleep'
  ];
  categories: Categorie[] = [];
  treeControl = new NestedTreeControl<Categorie> (node => node.subcat);
  dataSource = new ArrayDataSource(this.categories);
  form: FormGroup;

  hasChild = (_: number, node: Categorie) => !!node.subcat && node.subcat.length > 0;
  constructor(private serviceDepense: DepenseService, private fb: FormBuilder) {
    this.form = this.fb.group({
      published: true,
      credentials: this.fb.array([]),
    });
    this.serviceDepense.getCategories().subscribe((e) => {this.categories = e;
    this.dataSource = new ArrayDataSource(this.categories);
    });

  }

  ngOnInit(): void {
  }

  drop(event: CdkDragDrop<Categorie[]>): void {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
  }

  clicked($scope) {
    console.log('clicked');
    const creds = this.form.controls.credentials as FormArray;
    creds.push(this.fb.group({
      username: '',
    }));
  }
}
