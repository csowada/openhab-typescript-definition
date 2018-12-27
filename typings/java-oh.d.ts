declare interface Comparable<T> {
    compareTo(o:T): number;
}

declare class Locale {}
declare class Calendar {}

declare type TriggerValues = {
    command: Command,
    oldState: State,
    newState: State,
    event: Event,
    state: State
};
