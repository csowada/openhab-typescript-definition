/**
 *
 * @author Simon Merschjohann - Initial contribution
 */
interface SimpleTriggerHandlerCallback { //extends TriggerHandlerCallback {
    triggered(context: {[index: string]: any}): void;
}
