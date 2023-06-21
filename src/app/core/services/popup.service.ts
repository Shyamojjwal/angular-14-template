import { Injectable } from '@angular/core';
import { PopupConfirmation, PopupTitle, PopupType } from '@app-shared/models/popup.model';
import swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class PopupService {

  constructor() { }

  private showPopup(message: string, title: string, type: PopupType) {
    return swal.fire({
      showCloseButton: true,
      title,
      icon: type,
      confirmButtonColor: '#1B4383',
      text: message,
      customClass: {
        title: 'swal_header_title',
        // header: 'swal_header'
      }
    });
  }

  private showPopupAttention(message: string, title: string, type: PopupType) {

    return swal.fire(
      {
        showCloseButton: true,
        title,
        imageUrl: './assets/images/icons8-attention-64.png',
        confirmButtonColor: '#1B4383',
        text: message,
        customClass: {
          title: 'swal_header_title',
          // header: 'swal_header',
        }
      }
    );
  }

  confirm(message: string, title: string, confirmationOptions: PopupConfirmation) {

    return swal.fire(
      {
        showCloseButton: true,
        showCancelButton: true,
        title,
        icon: PopupType.WARNING,
        confirmButtonColor: '#1B4383',
        text: message,
        ...confirmationOptions,
        customClass: {
          title: 'swal_header_title',
          // header: 'swal_header',
        }
      }
    );

  }

  success(message: string, title: string = PopupTitle.SUCCESS) {
    return this.showPopup(message, title, PopupType.SUCCESS);
  }

  successWithRedAttentionIcon(message: string, title: string = PopupTitle.SUCCESS) {
    return this.showPopupAttention(message, title, PopupType.SUCCESS);
  }

  warning(message: string, title: string = PopupTitle.WARNING) {
    return this.showPopup(message, title, PopupType.WARNING);
  }

  error(message: string, title: string = PopupTitle.ERROR) {
    return this.showPopup(message, title, PopupType.ERROR);
  }

}
