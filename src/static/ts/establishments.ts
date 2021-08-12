import { from, Observable } from "rxjs";
import { URL_API } from "./../../config/urls";
import { EstablishmentHome } from './interfaces/establishment-home.interface';

export class Establishment {
  public getProducts(): Observable<EstablishmentHome> {
    return from(fetch(URL_API.localhost).then((response) => response.json()));
  }
}
