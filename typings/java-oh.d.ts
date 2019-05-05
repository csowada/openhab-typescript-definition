declare class Locale {}
declare class Calendar {}
declare class ZonedDateTime {}

declare type TriggerValues<T extends Event = Event> = {
    itemName: string
    command: Command
    oldState: State
    newState: State
    event: T
    state: State
    
    previousState: State
    eventTopic: string
    eventSource: string
    eventTypes: any
};
