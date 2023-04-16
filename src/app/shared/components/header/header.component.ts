import { LoadingService } from 'src/app/core/services/loading.service';
import { RoutingService } from 'src/app/core/services/routing.service';
import { UrlConst } from 'src/app/pages/constants/url-const';
import { MenuListResponseDto } from 'src/app/pages/models/dtos/responses/menu-list-response-dto';
import { AccountService } from 'src/app/pages/services/account.service';

import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

  @Component({
    selector:    'app-header',
    templateUrl: './header.component.html',
    styleUrls:  ['./header.component.scss']
  })
  export class HeaderComponent implements OnInit {
  // Clicks sidenav and throw event
  @Output() sidenavToggle = new EventEmitter();

  // Initial display screen URL
  initialDisplayScreenUrl: string = UrlConst.SLASH + UrlConst.PATH_PRODUCT_LISTING;

  // Menu response data
  menuListResponseDto: MenuListResponseDto[];

  constructor(
    private accountService:   AccountService,
    private loadingService:   LoadingService,
    private translateService: TranslateService,
    public  routingService:   RoutingService
  ) {}

  /**
   * on init
   */
  ngOnInit(): void {
    this.getMenu();
  }

  /**
   * Clicks toggle sidenav
   */
  clickSidenav(): void {
    this.sidenavToggle.emit();
  }

  /**
   * Clicks sign out
   */
  // clickSignOut(): void {
  // }

  // --------------------------------------------------------------------------------
  // private methods
  // --------------------------------------------------------------------------------
  private getMenu(): void {
    this.accountService.getMenu().subscribe((menuListResponseDto) => {
      this.menuListResponseDto = menuListResponseDto;
    });
  }
}
