declare class Locale {}
declare class Calendar {}
declare class ZonedDateTime {}

declare type TriggerValues = {
    command: Command,
    oldState: State,
    newState: State,
    event: Event,
    state: State
};
