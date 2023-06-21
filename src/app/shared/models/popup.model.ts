export enum PopupType {
  SUCCESS = 'success',
  WARNING = 'warning',
  ERROR = 'error',
}

export interface PopupConfirmation {
  confirmButtonText: string;
  cancelButtonText: string;
}

export enum PopupTitle {
  SUCCESS = 'Success',
  WARNING = 'Warning',
  ERROR = 'Error',
}
