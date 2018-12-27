/**
 * Trigger modules are used in the 'ON' section of {@link Rule} definition. They
 * defines what fires the {@link Rule} (what starts execution of the {@link Rule}). The triggers don't have
 * {@link Input} elements. They only
 * have: {@link ConfigDescriptionParameter}s and {@link Output}s defined by {@link TriggerType}.
 *
 * @author Yordan Mihaylov - Initial Contribution
 */
declare class Trigger extends Module {
    constructor();
    constructor(id: string, typeUID:string, configuration:Configuration);
}

// declare type TimerExecuteInput = {

// };

// declare type CommandEventInput = {
//     command: Command,
//     event: Event
// };

// declare type ItemStateInput = {
//     oldState: State,
//     newState: State,
//     event: Event
// };

declare type TriggerValues = {
    command: Command,
    oldState: State,
    newState: State,
    event: Event,
    state: State
};
