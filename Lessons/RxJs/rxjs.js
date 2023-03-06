// RxJS => Reactive Programming concepts

const { Observable, of, operators } = rxjs;

// Use the of creation operator to create an observable
const obsArrayOfNumbers = of([1, 3, 5]);

console.log('Map => ', operators.map,);

obsArrayOfNumbers.subscribe(response => {
    console.log('Obs response is => ', response);
});

const news = new Observable((s) => {
    s.next('Hello...');
    setTimeout(() => {
        s.next('10s later, we say good morning...');
    }, 10000)
    setTimeout(() => {
        s.next('15s later data, we say how are you?');
    }, 15000);

});

news.subscribe(data => {
    console.log('New Message => \n', data);
});


const numberObserver = new Observable((subscribe) => {
    subscribe.next([2, 5, 3, 8, 4, 9]);
})

// Common operators ( Map, filter, pipe, mergeMap, pluck, from,of,join,concat,flat)
// Observables = (Observable, Subject, BehaviourSubject)
// range, interval