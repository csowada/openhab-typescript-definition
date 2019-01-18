/**
 * This interface is used by persistence services to represent an item
 * with a certain state at a given point in time.
 *
 * <p>
 * Note that this interface does not extend {@link Item} as the persistence services could not provide an implementation
 * that correctly implement getAcceptedXTypes() and getGroupNames().
 * </p>
 *
 * @author Kai Kreuzer - Initial contribution and API
 */
declare interface HistoricItem extends java.lang.IObject {

    /**
     * returns the timestamp of the persisted item
     *
     * @return the timestamp of the item
     */
    getTimestamp():any; //Date

    /**
     * returns the current state of the item
     *
     * @return the current state
     */
    getState():State;

    /**
     * returns the name of the item
     *
     * @return the name of the item
     */
    getName():string;

}