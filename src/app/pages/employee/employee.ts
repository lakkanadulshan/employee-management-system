import { Component, OnInit, inject, signal } from '@angular/core';
import { Master } from '../../service/master'; 
import { ApiResponse, Department } from '../../model/interface/master';

@Component({
  selector: 'app-employee',
  imports: [],
  templateUrl: './employee.html',
  styleUrl: './employee.css',
})
export class Employee implements OnInit {
  isFormVisible = signal<boolean>(false);
  
  masterService = inject(Master); 

  ParentDepartmentsList = signal<Department[]>([]);

  ngOnInit(): void {
    this.getParentDepartments();
  }

  getParentDepartments(): void {
    this.masterService.getAllDept().subscribe({
      next: (res: ApiResponse) => {
        this.ParentDepartmentsList.set(res.data);
      },
      error: (err) => {
        console.error('Failed to load departments', err);
      }
    });
  }
}