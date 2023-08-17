import { Component, EventEmitter, Output } from '@angular/core';
import { iUser } from 'src/models/user.interface';
import { ApiService } from 'src/services/api.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css'],
})
export class SearchBarComponent {
  constructor(private apiService: ApiService) {}

  user: iUser = {} as iUser;
  notFound = false;

  @Output() newItemEvent = new EventEmitter<iUser>();

  sendUser(user: iUser) {
    this.newItemEvent.emit(user);
  }

  setError(error: boolean) {
    this.notFound = error;
  }

  onSubmit(event: any) {
    event.preventDefault();
    const username = event.srcElement[0]?.value;
    this.apiService.getUser(username, this.setError.bind(this)).subscribe((data: any) => {
      this.user = data;
      this.sendUser(this.user);
    });
  }
}
