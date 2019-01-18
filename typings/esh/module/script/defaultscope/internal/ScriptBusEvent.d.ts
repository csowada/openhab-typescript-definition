/**
 * The static methods of this class are made available as functions in the scripts.
 * This gives direct write access to the Eclipse SmartHome event bus from within scripts.
 * Items should not be updated directly (setting the state property), but updates should
 * be sent to the bus, so that all interested bundles are notified.
 *
 * @author Kai Kreuzer - Initial contribution and API
 * @author Stefan Bußweiler - Migration to new ESH event concept
 *
 */
declare class SimpleBusEvent extends java.lang.Object {

    /**
     * Sends a command for a specified item to the event bus.
     *
     * @param item the item to send the command to
     * @param commandString the command to send
     */
    sendCommand(item:Item, commandString:string):any;

    /**
     * Sends a number as a command for a specified item to the event bus.
     *
     * @param item the item to send the command to
     * @param number the number to send as a command
     */
    sendCommand(item:Item, number:number):any

    /**
     * Sends a command for a specified item to the event bus.
     *
     * @param itemName the name of the item to send the command to
     * @param commandString the command to send
     */
    sendCommand(itemName:string, commandString:string):any;

    /**
     * Sends a command for a specified item to the event bus.
     *
     * @param item the item to send the command to
     * @param command the command to send
     */
    sendCommand(item:Item, command:Command):any;

    /**
     * Posts a status update for a specified item to the event bus.
     *
     * @param item the item to send the status update for
     * @param state the new state of the item as a number
     */
    postUpdate(item:Item, state:number):any;

    /**
     * Posts a status update for a specified item to the event bus.
     *
     * @param item the item to send the status update for
     * @param stateAsString the new state of the item
     */
    postUpdate(item:Item, stateAsString:string):any;

    /**
     * Posts a status update for a specified item to the event bus.
     *
     * @param itemName the name of the item to send the status update for
     * @param stateAsString the new state of the item
     */
    postUpdate(itemName:string, stateString:string):any;

    /**
     * Posts a status update for a specified item to the event bus.
     * t
     *
     * @param item the item to send the status update for
     * @param state the new state of the item
     */
    postUpdate(item:Item, state:State):any;

    /**
     * Stores the current states for a list of items in a map.
     * A group item is not itself put into the map, but instead all its members.
     *
     * @param items the items for which the state should be stored
     * @return the map of items with their states
     */
    storeStates(...items:Item[]):any;  //Map<Item, State>

    /**
     * Restores item states from a map.
     * If the saved state can be interpreted as a command, a command is sent for the item
     * (and the physical device can send a status update if occurred). If it is no valid
     * command, the item state is directly updated to the saved value.
     *
     * @param statesMap a map with ({@link Item}, {@link State}) entries
     * @return null
     */
    restoreStates(statesMap:any):any; //(Map<Item, State> statesMap
}