/**
 *
 * @author Simon Merschjohann - Initial contribution
 */
interface SimpleTriggerHandlerCallback extends java.lang.IObject { //extends TriggerHandlerCallback {
    triggered(context: {[index: string]: any}): void;
}
