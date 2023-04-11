import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {
  isLoading: boolean;

  /**
   * Starts loading
   */
  startLoading() {
    this.isLoading = true;
  }

  /**
   * Stops loading
   */
  stopLoading() {
    this.isLoading = false;
  }
}
