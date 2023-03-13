import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'userFilter',
  standalone: true
})
export class UserFilterPipe implements PipeTransform {


  // take in a list of users and a search string

  transform(users: any, search: string): any {
      
      // if no search string, return all users
  
      if (!search) {
        return users;
      }
  
      // if search string, filter users
  
      return users.filter((user: any) => {
        return user.name.toLowerCase().includes(search.toLowerCase());
      });
    }
}
