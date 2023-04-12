import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ErrorMessagingService {
  private messageProperty: string;

  /**
   * Gets message property
   * @returns message property
   */
  getMessageProperty(): string {
    return this.messageProperty;
  };

  /**
   * Sets message property
   * @param message message property
   */
  setMessageProperty(message: string): void {
    this.messageProperty = message;
  }

  /**
   * Clear message property
   */
  clearMessageProperty(): void {
    this.messageProperty = '';
  }

  /**
   * Setups page error message from response
   * @param error error from api response
   */
  setUpPageErrorMessageFromResponse(error: any) {
    switch (error.status) {
      // 400エラー
      case 400:
        this.setMessageProperty('errMessage.http.badRequest');
        break;
      // 401エラー
      case 401:
        this.setMessageProperty('errMessage.http.unAuthorized');
        break;
      // 404エラー
      case 404:
        this.setMessageProperty('errMessage.http.notFound');
        break;
      // 500エラー
      case 500:
        // 同一のキー情報が既に登録されている場合
        if ('Duplicated key.' === error.error.message) {
          this.setMessageProperty('errMessage.http.duplicateKeyException');
        // 他ユーザーが同一データを変更した場合
        } else if ('Exclusive error occurred.' === error.error.message) {
          this.setMessageProperty('errMessage.http.exclusiveProcessingException');
        // データが存在しない場合
        } else if ('Data not found.' === error.error.message) {
          this.setMessageProperty('errMessage.http.datNotFoundException');
        // サーバーエラー
        } else {
          this.setMessageProperty('errMessage.http.internalServerError');
        }
        break;
      // サーバー通信エラー
      default:
        this.setMessageProperty('errMessage.http.GenericError');
        break;
    }
  }
}

