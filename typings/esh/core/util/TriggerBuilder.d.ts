/**
 * This class allows the easy construction of a {@link Trigger} instance using the builder pattern.
 *
 * @author Markus Rathgeb - Initial contribution and API
 */
declare class TriggerBuilder extends ModuleBuilder<TriggerBuilder, Trigger> {

    public static create(): TriggerBuilder

    public static  create(trigger:Trigger):TriggerBuilder

    public build(): Trigger

}