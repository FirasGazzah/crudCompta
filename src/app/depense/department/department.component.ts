import {Component, Inject, OnInit} from '@angular/core';
import {DepenseService} from '../../shared/services/depense.service';
import {Departement} from '../../shared/models/depense';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.scss']
})
export class DepartmentComponent implements OnInit {
  nom: Departement = new Departement();

  constructor(private depenseService: DepenseService, private dialogRef: MatDialogRef<DepartmentComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
  }

  addDepartment() {
    this.depenseService.addDepartment(this.nom).subscribe();
  }
}
