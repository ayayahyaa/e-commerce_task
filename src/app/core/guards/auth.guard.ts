import { isPlatformBrowser } from '@angular/common';
import { inject, PLATFORM_ID } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { jwtDecode } from 'jwt-decode';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject (Router)
  const id = inject (PLATFORM_ID)

  if(isPlatformBrowser(PLATFORM_ID) ){
      const token = localStorage.getItem('userToken')!;
      if(token){
        localStorage.setItem('userId',(jwtDecode(token) as {id:string}).id);
        return true;
    }
    else{
      router.navigate(['/login'])
      return false;
    }
  }
    return false ;
};
