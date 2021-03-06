import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  users$: Observable<User[]> = this.userService.getAll();
  phrase:string ="";
  //filteKey: string = 'name'
  columnKey: string = '';

  constructor(
    private userService: UserService,
  ) { }

  ngOnInit(): void {
    this.userService.getAll();
   // this.users$.subscribe();
    
  }
  //deleteOnClick(user:User) {
  //  this.userService.delete(user)
  //}
  //onDelete(user:User){
  //  this.userService.remove(user).subscribe(i=>{});
  //}
  //onChangePhrase(event:Event){
  //  this.phrase = (event.target as HTMLInputElement).value;
  //}
  //onDelete(user:User){
  //  this.userService.remove(user).subscribe(i=>{
  //  });
  //  this.userService.getAll().subscribe(i=>{
  //    
  // / })
  //}

  
  //onDelete(user:User){
  //  this.userService.remove(user).subscribe(i=>{
  //  });
  //  this.userService.getAll().subscribe(i=>{
  //    
  //  })
  //}
  //onDelete(user: User): void {
  //  this.userService.remove(user).subscribe(
  //    () => alert('Are you sure you want to delete this user?')
  //  );
  //};

  //onDelete(user:User){
  //  this.userService.remove(user).subscribe(i=>{
  //  });
  //  this.userService.getAll().subscribe(i=>{
//
  //  })
 // }
  //onDelete(user: User) {
  //  this.userService.remove(user);
  //}
  onDelete(user: User): void {
    this.userService.remove(user).subscribe(
      () => alert('Biztosan törlöd?')
    );
    this.userService.getAll();
  }

  onChangePhrase(event: Event): void {
    this.phrase = (event.target as HTMLInputElement).value;
  }

  onColumnSelect(key: string): void {
    this.columnKey = key;
  }
}
