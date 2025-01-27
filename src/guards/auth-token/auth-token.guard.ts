/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable prettier/prettier */
import { CanActivate, ExecutionContext, Injectable } from "@nestjs/common";
import { Observable } from "rxjs";

@Injectable()
export class AuthTokenGuard implements CanActivate {
  canActivate(
    context: ExecutionContext
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest() as Request;
    const auth = request.headers["authorization"];
    const descryp = atob(JSON.parse(auth));
    const jsonToken: { user: string; fecha: string; id: string } = JSON.parse(descryp);
    const { user, fecha } = jsonToken;
    console.log(user);    
    if (new Date() > new Date(fecha)) {
      return false;
    } else {
      return true;
    }
  }
}
