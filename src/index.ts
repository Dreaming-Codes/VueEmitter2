import { App, Plugin } from 'vue';
import type {ConstructorOptions} from "eventemitter2";
import {EventEmitter2} from "eventemitter2";

export const VueEmitter2: Plugin = {
    install(app: App, options: ConstructorOptions) {
        app.config.globalProperties.$eventemitter2 = new EventEmitter2(options);
    }
};
