import { UrlConst } from 'src/app/pages/constants/url-const';
import { MenuListResponseDto } from 'src/app/pages/models/dtos/responses/menu-list-response-dto';

import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector:    'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls:  ['./sidenav.component.scss']
})
export class SidenavComponent {

  // Clicks sidenav and throw event
  @Output() sidenavClose = new EventEmitter();

  // Initial display screen URL
  initialDisplayScreenUrl: string = UrlConst.SLASH + UrlConst.PATH_PRODUCT_LISTING;

  // Menu response data
  menuListResponseDto: MenuListResponseDto[];

}
