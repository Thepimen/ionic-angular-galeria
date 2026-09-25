import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { 
  IonHeader, IonToolbar, IonTitle, IonContent, 
  IonSpinner, IonList, IonItem, IonLabel, IonAvatar 
} from '@ionic/angular';
import { UsersService } from '../../services/users.service';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-users',
  templateUrl: './users.page.html',
  styleUrls: ['./users.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    IonHeader, IonToolbar, IonTitle, IonContent, 
    IonSpinner, IonList, IonItem, IonLabel, IonAvatar
  ]
})
export class UsersPage implements OnInit {
  users: User[] = [];
  loading = false;

  constructor(
    private usersService: UsersService,
    private cdr: ChangeDetectorRef
  ) {}

  async ngOnInit() {
    await this.loadUsers();
  }

  async loadUsers() {
    try {
      this.loading = true;
      this.cdr.detectChanges();
      this.users = await this.usersService.getUsers();
    } catch (error) {
      console.error('Error al consumir la API de DummyJSON:', error);
    } finally {
      this.loading = false;
      this.cdr.detectChanges();
    }
  }
}
