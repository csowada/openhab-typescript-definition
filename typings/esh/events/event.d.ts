/**
 * {@link Event} objects are delivered by the {@link EventPublisher} through the Eclipse SmartHome event bus.
 * The callback interface {@link EventSubscriber} can be implemented in order to receive such events.
 * 
 * @author Stefan Bußweiler - Initial contribution
 */
interface Event {

    /**
     * Gets the event type.
     * 
     * @return the event type
     */
    getType(): string;

    /**
     * Gets the topic of an event.
     * 
     * @return the event topic
     */
    getTopic(): String;

    /**
     * Gets the payload as a serialized string.
     * 
     * @return the serialized event
     */
    getPayload(): String;

    /**
     * Gets the name of the source identifying the sender.
     * 
     * @return the name of the source
     */
    getSource(): String;

}