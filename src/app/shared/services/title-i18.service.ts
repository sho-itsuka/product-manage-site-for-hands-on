import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class TitleI18Service {
  constructor(
    private translateService: TranslateService,
    public title:             Title
  ) {}
}
