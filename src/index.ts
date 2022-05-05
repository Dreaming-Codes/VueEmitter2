import { App, Plugin } from 'vue';
import type {ConstructorOptions} from "eventemitter2";
import {EventEmitter2} from "eventemitter2";

const VueEmitter2: Plugin = {
    install(app: App, options: ConstructorOptions) {
        const eventEmitter2 = new EventEmitter2(options);
        app.config.globalProperties.$eventEmitter2 = eventEmitter2;

        app.provide('eventEmitter2', eventEmitter2);
    }
};
export default VueEmitter2;
