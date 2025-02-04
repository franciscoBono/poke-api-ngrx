import { PkmnService } from './../../services/pkmn.service';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';

@Injectable()
export class PkmnListEffects {

    loadPkmnList$ = createEffect(() => this.actions$.pipe(
        ofType('[Pkmn List] Load pkmnList'),
        mergeMap(() => this.pkmnService.getPkmnList()
            .pipe(
                map(pkmnList => ({ type: '[Pkmn List] Loaded pkmnList success', pkmnList })),
                catchError(() => EMPTY)
            ))
    )
    );

    /* loadPkmnByName$ = createEffect(() => this.actions$.pipe(
      ofType('[Pkmn List] Load pkmn by name'),
      mergeMap((action: any) => this.pkmnService.getPkmnByName(action.name)//TODO Retorna la data [...]
          .pipe(
              map(pkmn => ({ type: '[Pkmn List] Loaded pkmn by name success', pkmn })),
              catchError(() => EMPTY)
          ))
    )
    ); */


    loadPkmnByName$ = createEffect(() => this.actions$.pipe(
      ofType('[Pkmn List] Load pkmn by name'),
      mergeMap((action: any) => this.pkmnService.getPkmnByName(action.name)
          .pipe(
              map(pkmn => ({ type: '[Pkmn List] Loaded pkmn by name success', pkmn })),
              catchError(() => EMPTY)
          ))
    )
    );

    constructor(
        private actions$: Actions,
        private pkmnService: PkmnService
    ) { }
}
