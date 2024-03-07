import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar'
import { Injectable } from '@angular/core'

interface SnackParams{
  message: string,
  action: string,
  config?: MatSnackBarConfig
}

@Injectable({
  providedIn: 'root',
})
export class SnackbarAlertService {
  constructor(private snackbar: MatSnackBar) {}

  openSuccesSnack(snackParams: SnackParams) {
    return this.openSnack(['snackbar-succes', 'title6'], snackParams)
  }

  openErrorSnack(snackParams: SnackParams) {
    return this.openSnack(['snackbar-error', 'title6'], snackParams)
  }

  private openSnack(snackClass: Array<string> | string, snackParams: SnackParams) {
    return this.snackbar.open(snackParams.message, snackParams.action, {  panelClass: snackClass, ...snackParams.config })
  }
}
