import React from 'react';
import * as rxjs from 'rxjs';
import { of,  pipe, Observable, Subject, asyncScheduler, from  } from 'rxjs';
import { switchMap, filter, observeOn, map, catchError, concatAll  } from 'rxjs/operators';
import axios from '../../plugins/axios'

// const subject = new Subject();
// subject.subscribe({
//   next: (v) => console.log(`observerA: ${v}`)
// });
// subject.subscribe({
//   next: (v) => console.log(`observerB: ${v}`)
// });
// subject.next(1);
// subject.next(2);
// const observable = new Observable((observer) => {
//   observer.next(1);
//   observer.next(2);
//   observer.next(3);
//   observer.complete();
// }).pipe(
//   observeOn(asyncScheduler)
// );
 
// console.log('just before subscribe');
// observable.subscribe({
//   next(x) {
//     console.log('got value ' + x)
//   },
//   error(err) {
//     console.error('something wrong occurred: ' + err);
//   },
//   complete() {
//      console.log('done');
//   }
// });
// console.log('just after subscribe');
// function discardOddDoubleEven() {
//   return pipe(
//     //filter(v => ! (v % 2)),
//     map(v => v + v),
//   );
// }

// function delay(delayInMillis) {
//   return (observable) => new Observable(observer => {
//     // this function will called each time this
//     // Observable is subscribed to.
//     const allTimerIDs = new Set();
//     const subscription = observable.subscribe({
//       next(value) {
//         const timerID = setTimeout(() => {
//           observer.next(value);
//           allTimerIDs.delete(timerID);
//         }, delayInMillis);
//         allTimerIDs.add(timerID);
//       },
//       error(err) {
//         observer.error(err);
//       },
//       complete() {
//         observer.complete();
//       }
//     });
//     // the return value is the teardown function,
//     // which will be invoked when the new
//     // Observable is unsubscribed from.
//     return () => {
//       subscription.unsubscribe();
//       allTimerIDs.forEach(timerID => {
//         clearTimeout(timerID);
//       });
//     }
//   });
// }



const Rxjs = () => {
  // let a = rxjs.of(1,2,3)
  // console.log(a,'a')
  // const observable = new Observable(subscriber => {
  //   subscriber.next(1);
  //   subscriber.next(2);
  //   subscriber.next(3);
  //   setTimeout(() => {
  //     subscriber.next(4);
  //     subscriber.complete();
  //   }, 1000);
  // });
   
  // console.log('just before subscribe');
  // observable.subscribe({
  //   next(x) { console.log('got value ' + x); },
  //   error(err) { console.error('something wrong occurred: ' + err); },
  //   complete() { console.log('done'); }
  // });
  // console.log('just after subscribe');
  // map(x => x * x)(of(1, 2, 3)).subscribe((v) => console.log(`value: ${v}`));
  
  

  const urlObservable = new Observable(subscriber => {
                          subscriber.next('/api/moby-mall/postsale/api/v1/postsale/task/list/PRECHECK/ALL');
                        })
                        .pipe(
                          switchMap(url => axios.get(url)),
                          map(v =>{
                                    v=v.data.payload.list.filter(x=>x.status==='SHUT');
                                    console.log(v,'v')
                                    return v
                          }),
                          //filter(x=>x.status==='SHUT'),
                          map(v =>console.log(v,'vvv')),
                          catchError(err=>{console.log(err)}),
                        )
                        .subscribe({
                          next(x) { console.log('got value ' , x); },
                          error(err) { console.error('something wrong occurred: ' , err); },
                          complete(x) { console.log('done',x); }
                        });
  
    let http = new Observable(subscriber => {
                              subscriber.next('/api/moby-mall/postsale/api/v1/postsale/task/list/PRECHECK/ALL');
                            })
    http.pipe(
      switchMap(url => axios.get(url)),
      map(v =>{
                v=v.data.payload.list.filter(x=>x.status==='SHUT');
                console.log(v,'http')
                return v
      }),
      //concatAll(),
      //filter(x=>x.status==='SHUT'),
      map(v =>console.log(v,'http')),
      catchError(err=>{console.log(err)}),
    )
    .subscribe({
      next(x) { console.log('got value ' , x); },
      error(err) { console.error('something wrong occurred: ' , err); },
      complete(x) { console.log('done',x); }
    });                     

    const angular  = from(axios.get('/api/moby-mall/postsale/api/v1/postsale/task/list/PRECHECK/ALL'))
    angular.subscribe({
      next(response) { console.log('a',response); },
      error(err) { console.error('Error: ' + err); },
      complete() { console.log('Completed'); }
    });
  
  
  
  return (
    <div>
     rxjs
    </div>
  );
};

export default Rxjs;

