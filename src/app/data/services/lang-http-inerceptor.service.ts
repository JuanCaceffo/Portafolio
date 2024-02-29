import { TranslocoService } from '@ngneat/transloco'
import { Injectable } from '@angular/core'
import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http'
import { Observable } from 'rxjs'

@Injectable()
export class LangHttpInerceptorService implements HttpInterceptor {
  constructor(private translocoService: TranslocoService) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const newReq = req.clone({
      headers: req.headers.set(
        'Accept-Language',
        this.translocoService.getActiveLang()
      ),
    })

    return next.handle(newReq)
  }
}
