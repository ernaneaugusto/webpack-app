import "@fortawesome/fontawesome-free/js/all.min.js";
import "bootstrap/dist/js/bootstrap.bundle.js";
import "./../scss/style.scss";

import { Establishment } from "./establishments";
import { EstablishmentHome } from "./interfaces/establishment-home.interface";

const products: Establishment = new Establishment();

products.getProducts().subscribe((establishments: EstablishmentHome) => {
  console.log("## Estabelecimentos", establishments);
});
