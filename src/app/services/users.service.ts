import { Injectable } from '@angular/core';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private readonly apiUrl = 'https://dummyjson.com/users';

  async getUsers(): Promise<User[]> {
    const response = await fetch(this.apiUrl);
    if (!response.ok) {
      throw new Error(`Error HTTP: ${response.status}`);
    }
    const data = await response.json();
    return data.users;
  }

  async getUserById(id: number): Promise<User | undefined> {
    const response = await fetch(`${this.apiUrl}/${id}`);
    if (!response.ok) {
      throw new Error(`Error HTTP: ${response.status}`);
    }
    return await response.json();
  }
}
