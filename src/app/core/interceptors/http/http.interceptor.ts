import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpErrorResponse,
} from '@angular/common/http';
import { MessageService } from 'primeng/api';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

/**
 * HttpInterceptorService is an Angular service that intercepts HTTP requests
 * to add common headers or handle errors globally.
 *
 * @class HttpInterceptorService
 * @implements {HttpInterceptor}
 */
@Injectable()
export class HttpInterceptorService implements HttpInterceptor {
  public constructor(private messageService: MessageService) {}

  /**
   * Intercepts all HTTP requests and adds common headers or handles errors.
   * @param req The outgoing HTTP request.
   * @param next The next handler in the chain.
   * @returns An Observable of the HTTP event.
   */
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      catchError((error: HttpErrorResponse) => {
        this.messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: 'An unexpected error occurred.',
        });

        return throwError(() => error);
      })
    );
  }
}
