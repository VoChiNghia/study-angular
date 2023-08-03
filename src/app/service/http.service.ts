import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment as env } from 'src/environments/environment';
import { Jobs } from '../model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(private http: HttpClient) {}

  getAllJob() {
    return this.http.get<Observable<Jobs[]>>(env.BASE_URL);
  }
  signUpApi(data: any) {
    return this.http.post(
      'https://64ca0552b2980cec85c2c481.mockapi.io/api/v1/user',
      data
    );
  }
  getJobByid(id: string) {
    return this.http.get<Observable<Jobs>>(`${env.BASE_URL}/${id}`);
  }
}
