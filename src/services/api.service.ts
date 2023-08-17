import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { iUser } from 'src/models/user.interface';


@Injectable({
  providedIn: 'root'
})

export class ApiService {
  apiUrl = 'https://api.github.com/users';
  error = false;

  constructor(private http: HttpClient) { }

  private handleError(setError: (error: boolean) => void) {
    setError(true);
    return throwError(() => new Error('User not found'));
  }

  getUser(username: string, setError: (error: boolean) => void): Observable<iUser> {
    setError(false);
    return this.http.get<iUser>(`${this.apiUrl}/${username}`)
      .pipe(
        catchError(() => this.handleError(setError))
      );
  }
}
