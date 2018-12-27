// Nashorn globals

/**
 * sdsd
 */
declare function print (_: string) : void;

declare function load (_: string) : any;
declare function load (_: {name: string, script: string}) : any;

declare var __DIR__: string;
declare var __FILE__: string;
declare var __LINE__:number;

declare var __filename: string;

// interface NodeModule {
//     exports: any;
    // require: NodeRequireFunction;
    // id: string;
    // filename: string;
    // loaded: boolean;
    // parent: NodeModule | null;
    // children: NodeModule[];
// }

// declare var module: NodeModule;

declare class Java {
    static extend(type: any): any
    static extend(type: any, impl: any): any
    static from(value: any): any
    static to(value: any, type: any): any
    static type(className: string): any
}

declare const Packages: any