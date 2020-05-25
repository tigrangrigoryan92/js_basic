const EventsEmitter = require('events');

const emitter = new EventsEmitter();

// EVENT EMITTER
// emitter.on("anything", data => {
//     console.log('On anything: ', data);
// });
//
// emitter.emit("anything", {a:1});
// emitter.emit("anything", {b:2});
//
// setTimeout(() => {
//     emitter.emit("anything", {c:3});
// }, 1000);


class Dispatcher extends EventsEmitter{
    subscribe(eventName, cb) {
        console.log('[Subscribe...]');
        this.on(eventName, cb);
    }

    dispatch(eventName, data) {
        console.log('[Dispatching...]');
        this.emit(eventName, data);
    }
}


const dis = new Dispatcher();


dis.subscribe("aa", data=>{
    console.log('On aa ', data);
});

dis.dispatch('aa', {a:1});
