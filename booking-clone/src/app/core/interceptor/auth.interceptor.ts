import { HttpInterceptorFn } from '@angular/common/http';

const XRapidAPIKey = 'cf901d06ecmsh65fe4be5632be82p18d952jsn369fe36364b6';
const XRapidAPIHost = 'booking-com15.p.rapidapi.com';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  if (req.headers && req.headers.has('X-Skip-Interceptor')) {
    const headers = req.headers.delete('X-Skip-Interceptor');
    return next(req.clone({ headers }));
  }
  const authReq = req.clone({
    headers: req.headers
      .set('X-RapidAPI-Key', XRapidAPIKey)
      .append('X-RapidAPI-Host', XRapidAPIHost),
  });
  return next(authReq);
};
