import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TimeoutHttpInterceptorService implements HttpInterceptor {
  DEFAULT_TIMEOUT = 30000
  
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const timeoutValue = req.headers.get('timeout') || this.DEFAULT_TIMEOUT
    const httpReq = req.clone({
      headers: req.headers.set('timeout', timeoutValue.toString())
    })
    
    return next.handle(httpReq)
  }
}
