/**
 * {@link ItemStateChangedEvent}s can be used to deliver item state changes through the Eclipse SmartHome event bus. In
 * contrast to the {@link ItemStateEvent} the {@link ItemStateChangedEvent} is only sent if the state changed.
 * State events must be created with the {@link ItemEventFactory}.
 *
 * @author Dennis Nobel - Initial contribution
 */
declare class ItemStateChangedEvent extends AbstractEvent {

    public getType(): string

    /**
     * Gets the item name.
     *
     * @return the item name
     */
    public getItemName(): string

    /**
     * Gets the item state.
     *
     * @return the item state
     */
    public getItemState(): State

    /**
     * Gets the old item state.
     *
     * @return the old item state
     */
    public getOldItemState(): State

}