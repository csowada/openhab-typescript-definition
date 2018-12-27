/**
 * An automation Rule is built from {@link Module}s and consists of three parts:
 * <ul>
 * <li><b>Triggers:</b> a list of {@link Trigger} modules. Each {@link Trigger} from this list
 * can start the evaluation of the Rule. A Rule with an empty list of {@link Trigger}s can
 * only be triggered through the {@link RuleRegistry#runNow(String, boolean, java.util.Map)} method,
 * or directly executed with the {@link RuleRegistry#runNow(String)} method.
 * <li><b>Conditions:</b> a list of {@link Condition} modules. When a Rule is triggered, the
 * evaluation of the Rule {@link Condition}s will determine if the Rule will be executed.
 * A Rule will be executed only when all it's {@link Condition}s are satisfied. If the {@link Condition}s
 * list is empty, the Rule is considered satisfied.
 * <li><b>Actions:</b> a list of {@link Action} modules. These modules determine the actions that
 * will be performed when a Rule is executed.
 * </ul>
 * Additionally, Rules can have <code><b>tags</b></code> - non-hierarchical keywords or terms for describing them.
 * They can help the user to classify or label the Rules, and to filter and search them.
 *
 * @author Kai Kreuzer - Initial Contribution
 */
interface Rule extends Identifiable<string> {

    /**
     * This method is used for getting the unique identifier of the Rule. This property is set by the RuleEngine when
     * the {@link Rule} is added. It's optional property.
     *
     * @return unique id of this {@link Rule}
     */
    getUID(): string;
    
    /**
     * This method is used for getting the unique identifier of the RuleTemplate. This property is set by the RuleEngine
     * when the {@link Rule} is added and it is created from template. It's optional property.
     *
     * @return unique id of this {@link Rule}
     */
    getTemplateUID(): string;

    /**
     * This method is used for getting the user friendly name of the {@link Rule}. It's optional property.
     *
     * @return the name of rule or null.
     */
    getName(): string;

    /**
     * Rules can have
     * <ul>
     * <li><code>tags</code> - non-hierarchical keywords or terms for describing them. This method is
     * used for getting the tags assign to this Rule. The tags are used to filter the rules.</li>
     * </ul>
     *
     * @return a {@link Set} of tags
     */
    getTags(): string[]; //Set<String>

    /**
     * This method is used for getting the description of the Rule. The
     * description is a long, user friendly description of the Rule defined by
     * this descriptor.
     *
     * @return the description of the Rule.
     */
    getDescription(): string;

    /**
     * This method is used to show visibility of the Rule
     *
     * @return visibility of rule
     */
    getVisibility() : Visibility;

    /**
     * This method is used for getting Map with configuration values of the {@link Rule} Key -id of the
     * {@link ConfigDescriptionParameter} Value - the
     * value of the corresponding property
     *
     * @return current configuration values
     */
    getConfiguration() : Configuration;

    /**
     * This method is used for getting the {@link List} with {@link ConfigDescriptionParameter}s
     * defining meta info for configuration properties of the Rule.
     *
     * @return a {@link Set} of {@link ConfigDescriptionParameter}s.
     */
    getConfigurationDescriptions():ConfigDescriptionParameter[];

    /**
     * This method is used to get the conditions participating in {@link Rule}.
     *
     * @return a list with the conditions that belong to this {@link Rule}.
     */
    getConditions(): Condition[];

    /**
     * This method is used to get the actions participating in {@link Rule}.
     *
     * @return a list with the actions that belong to this {@link Rule}.
     */
    getActions():Action[];

    /**
     * This method is used to get the triggers participating in {@link Rule}.
     *
     * @return a list with the triggers that belong to this {@link Rule}.
     */
    getTriggers():Trigger[];

    /**
     * This method is used to return the module of this rule.
     *
     * @param moduleClazz optional parameter defining type looking modules. The
     *            types are {@link Trigger}, {@link Condition} or {@link Action}
     * @return list of modules of defined type or all modules when the type is not
     *         specified.
     */
    getModules(moduleClazz:any):any[];

}