


# take(count) - Испускает только первые count значения, испускаемые исходным Observable.
# distinct-until-changed() - проверяет с предыдущим значением. (ДИСТИНКТ ЭНТИЛ ЧЕНДЖ)
# debouncetime(500)
# throttletime(500) 


import { of, from } from 'rxjs';
import { map, mergeMap, delay, mergeAll } from 'rxjs/operators';

const getData = (param) => {
  return of(`retrieved new data with param ${param}`).pipe(
    delay(1000)
  )
}

# используем  map
from([1,2,3,4]).pipe(
  map(param => getData(param))
).subscribe(val => val.subscribe(data => console.log(data))); - приходится два раза подписываться!!!

# используем map и mergeAll
from([1,2,3,4]).pipe(
  map(param => getData(param)),
  mergeAll()
).subscribe(val => console.log(val));

# используем mergeMap
from([1,2,3,4]).pipe(
  mergeMap(param => getData(param))
).subscribe(val => console.log(val));

# mergeMap - сводим вместе данные из двух обзервблов.
# switchMap - выводим только результат последнего Обзервбла.
# concatMap не будет подписываться на следующий Observable, пока не завершится текущий. Преимущество этого подхда в том, что порядок, в котором эмитятся Observable, поддерживается. 