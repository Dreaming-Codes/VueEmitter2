# Vue Emitter 2
#### A Vue.js 3 wrapper for EventEmitter2
___
# Usage
In your entrypoint add:
```
app.use(VueEmitter2, {}//EventEmitter2 options)
```
Then you can use EventEmitter2 like
```
this.$eventemitter2.emit('event', data)
//OR
const eventemitter2 = inject('eventEmitter2');
eventemitter2.emit('event', data)
```
