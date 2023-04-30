import { LoadingService } from 'src/app/core/services/loading.service';
import { RoutingService } from 'src/app/core/services/routing.service';
import { TitleI18Service } from 'src/app/shared/services/title-i18.service';

import { AfterViewChecked, Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { TranslateService } from '@ngx-translate/core';

import { UrlConst } from '../../constants/url-const';
import { ProductSearchResponseDto } from '../../models/dtos/responses/product-search-response-dto';
import { AccountService } from '../../services/account.service';

@Component({
  selector:    'app-product-listing-page',
  templateUrl: './product-listing-page.component.html',
  styleUrls:  ['./product-listing-page.component.scss']
})
export class ProductListingPageComponent implements OnInit, AfterViewChecked {
  constructor(
    private accountService:  AccountService,
    private formBuilder:     FormBuilder,
    private loadingService:  LoadingService,
    private routingService:  RoutingService,
    private titleI18Service: TitleI18Service,
    public translateService: TranslateService
  ) {}

  productName  = new FormControl<string>('', []);
  productCode  = new FormControl<string>('', []);
  productGenre = new FormControl<string>('', []);
  endOfSale    = new FormControl<boolean>(false, []);

  searchForm = this.formBuilder.group({
    productName:  this.productName,
    productCode:  this.productCode,
    productGenre: this.productGenre,
    endOfSale:    this.endOfSale
  });

  /** Select item of genre */
  genres: string[];

  /** Material table's header */
  displayColumns: string[] = [
    'no',
    'productName',
    'productCode',
    'productGenre',
    'productImage',
    'productSizeStandard',
    'productColor',
    'productUnitPrice',
    'productStockQuantity',
    'endOfSale'
  ];

  /** Search result */
  productSearchResponseDtos: ProductSearchResponseDto[];
  resultsLength = 0;

  /** Paginator */
  @ViewChild(MatPaginator)
  public paginator: MatPaginator;
  initialPageSize = 50;

  /**
   * on init
   */
  ngOnInit(): void {
    this.setupLanguage();
  }

  /**
   * after view checked
   */
  ngAfterViewChecked(): void {
    this.titleI18Service.setTitle(UrlConst.PATH_PRODUCT_LISTING);
  }

  /**
   * Clicks new button
   */
  clickNewButton(): void {
    this.routingService.navigate(UrlConst.PATH_PRODUCT_REGISTERING_NEW);
  }

  /**
   * Clicks clear button
   */
  clickClearButton(): void {
    return
  }

  /**
   * Clicks search button
   */
  clickSearchButton(): void {
    return
  }

  /**
   * Clicks list row
   * @param productSearchResponseDto Product search response dto
   */
  clickListRow(productSearchResponseDto: ProductSearchResponseDto): void {
    return
  }

  /**
   * Unselects product genre
   */
  unselectProductGenre(): void {
    return
  }

  // --------------------------------------------------------------------------------
  // private methods
  // --------------------------------------------------------------------------------
  private setupLanguage(): void {
    const lang = this.accountService.getUser().userLanguage;
    this.translateService.setDefaultLang(lang);
    this.translateService.use(lang);
  }
}
