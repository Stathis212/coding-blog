import { Injectable } from '@angular/core';

@Injectable()
export class ApiConfig {

  private _apiUrl = 'http://localhost:3000/api/';

  public get apiUrl(): string {
    return this._apiUrl;
  }
}
