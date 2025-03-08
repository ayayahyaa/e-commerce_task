import { isPlatformBrowser } from '@angular/common';
import { inject, PLATFORM_ID } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { jwtDecode } from 'jwt-decode';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject (Router)
  const id = inject (PLATFORM_ID)

  if(isPlatformBrowser(id) ){
      const token = localStorage.getItem('token')!;
      localStorage.setItem('userId',(jwtDecode(token) as {id:string}).id)
      if(token){
        return true;
    }

    else{
      router.navigate(['/login'])
      return false;
    }
  }
    return false ;

};
