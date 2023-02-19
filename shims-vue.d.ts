declare module "*.vue" {
    import type { DefineComponent } from "vue";
    const component: DefineComponent<{}, {}, any>;
    export default component;
}

declare module 'vue-buffer';

declare module "@";
declare module '*.png';
declare module '*.jpg';
declare module '*.svg';