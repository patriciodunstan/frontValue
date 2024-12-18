import { Injectable } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const token = localStorage.getItem('token');
  const expiration = localStorage.getItem('tokenExpiration');
  const router = new Router();

  if (token && expiration && Date.now() < Number(expiration)) {
    return true;
  } else {
    localStorage.clear();
    router.navigate(['/login']);
    return false;
  }
};
