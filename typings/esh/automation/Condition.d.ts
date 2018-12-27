/**
 * Condition module is used into "IF" section of the {@link Rule} definition.
 * The "IF" section defines conditions which must be satisfied to continue {@link Rule} execution. Building elements of
 * condition ( {@link ConfigDescriptionParameter}s and {@link Input}s are defined by {@link ConditionType} Conditions
 * don't have {@link Output} elements.
 *
 * @author Yordan Mihaylov - Initial Contribution
 */
interface Condition extends Module {

    /**
     * This method is used to get input connections of the Condition. The connections
     * are links between {@link Input}s of the current {@link Module} and {@link Output}s of other
     * {@link Module}s.
     *
     * @return map that contains the inputs of this condition.
     */
    getInputs(): {[index: string]:string};    //Map<String, String> 
}