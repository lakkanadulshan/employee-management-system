export interface ApiResponse {
  status: string;
  message: string;
  data: any;
}

export interface Department {
  deptId: number;
  deptName: string;
  deptDescription: string;
}