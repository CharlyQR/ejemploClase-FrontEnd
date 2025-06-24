import { inject, Injectable, signal } from '@angular/core';
import { IResponse, ISearch, ISportTeam } from '../interfaces';
import { BaseService } from './base-service';
import { AuthService } from './auth.service';
import { AlertService } from './alert.service';

@Injectable({
  providedIn: 'root'
})
export class TeamService extends BaseService<ISportTeam>{
  protected override source: string = 'teams';
  private teamListSignal = signal<ISportTeam[]>([]);
  get teams$() {
    return this.teamListSignal;
  }
  public search: ISearch = { 
    page: 1,
    size: 5
  }
  public totalItems: any = [];
  //private authService: AuthService = inject(AuthService);
  private alertService: AlertService = inject(AlertService);

  getAll() {
    this.findAllWithParams({page: this.search, size: this.search.size})
    .subscribe({
      next: (response: IResponse<ISportTeam[]>) => {
        this.totalItems = Array.from({ length: this.search.totalPages ? this.search.totalPages : 0 }, (_, i) => i + 1);
        this.teamListSignal.set(response.data);
      },
      error: (err: any) => {
        console.error('error', err);
      }
    });  
  } 
}