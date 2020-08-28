
import { of as observableOf,  Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { UserData } from '../data/users';

@Injectable()
export class UserService extends UserData {
  private users = {
    nicolau: { title: 'Nicolau Ruela', avatar: 'assets/images/nicolau_ruela.png', subtitle: 'nicolau.ruela@bol.com' },
    mirela: { title: 'Mirela Cobra', avatar: 'assets/images/mirala_cobra.png', subtitle: 'mirala.cobra@aol.com' },
    josefa: { title: 'Josefa Aldeia', avatar: 'assets/images/josefa_aldeia.png', subtitle: 'joseja.aldeira@jol.com' },
    fabricio: { title: 'Fabricio Gabeira', avatar: 'assets/images/fabricio_gabeira.png', subtitle: 'fabricio.gabeira@kol.com' },
    caetana: { title: 'Caetana Aguiar', avatar: 'assets/images/caetana_aguiar.png', subtitle: 'caetana.aguiar@mol.com' },
  };

  getUsers(): Observable<any> {
    return observableOf(this.users);
  }
}