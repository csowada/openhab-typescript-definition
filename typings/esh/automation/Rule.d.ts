declare class Rule {

    /**
     * Constructor creates an empty rule. The rule has ruleUID set by the rule engine.
     */
    constructor();

    /**
     * Constructor creates an empty rule with specified rule uid
     *
     * @param uid is the unique identifier of created rule.
     */
    constructor(uid:string);

        /**
     * Utility constructor which creates a rule from modules or template.
     *
     * @param uid is the unique identifier of the rule.
     * @param triggers trigger modules
     * @param conditions condition modules
     * @param actions action modules
     * @param configurations are values of rule template. It is available when the rule is created from template and the
     *            template is not resolved.
     * @param templateUID the unique identifier of RuleTemplate. It is available when the rule is created from template
     *            and the template is not resolved.
     * @param visibility visibility of rule
     */
    constructor(uid:string, triggers:Trigger[], //
            conditions:Condition[], //
            actions:Action[], //
            configDescriptions:ConfigDescriptionParameter[], //
            configurations:Configuration, templateUID:string, visibility:Visibility);

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
     * This method is used for setting a friendly name of the Rule. This property
     * can be changed only when the Rule is not in active state.
     *
     * @param ruleName a new name.
     * @throws IllegalStateException when the rule is in active state
     */
    setName(ruleName: string): void;

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
     * Rules can have
     * <ul>
     * <li><code>tags</code> - non-hierarchical keywords or terms for describing them. This method is
     * used for setting the tags to this rule. This property can be changed only when the Rule is not in active state.
     * The tags are used to filter the rules.</li>
     * </ul>
     *
     * @param ruleTags list of tags assign to this Rule.
     * @throws IllegalStateException when the rule is in active state.
     */
    setTags(ruleTags: string[]):void;

    /**
     * This method is used for getting the description of the Rule. The
     * description is a long, user friendly description of the Rule defined by
     * this descriptor.
     *
     * @return the description of the Rule.
     */
    getDescription(): string;

    /**
     * This method is used for setting the description of the Rule. The
     * description is a long, user friendly description of the Rule defined by
     * this descriptor.
     *
     * @param ruleDescription of the Rule.
     */
    setDescription(ruleDescription: string): void;

    // /**
    //  * This method is used to show visibility of the Rule
    //  *
    //  * @return visibility of rule
    //  */
    // getVisibility() : Visibility;

    // setVisibility(visibility:Visibility):void;

    /**
     * This method is used for getting Map with configuration values of the {@link Rule} Key -id of the
     * {@link ConfigDescriptionParameter} Value - the
     * value of the corresponding property
     *
     * @return current configuration values
     */
    getConfiguration() : Configuration;

    /**
     * This method is used for setting the Map with configuration values of the {@link Rule}. Key - id of the
     * {@link ConfigDescriptionParameter} Value -
     * the value of the corresponding property
     *
     * @param ruleConfiguration new configuration values.
     */
    setConfiguration(ruleConfiguration:Configuration):void;

    // /**
    //  * This method is used for getting the {@link List} with {@link ConfigDescriptionParameter}s
    //  * defining meta info for configuration properties of the Rule.
    //  *
    //  * @return a {@link Set} of {@link ConfigDescriptionParameter}s.
    //  */
    // getConfigurationDescriptions():ConfigDescriptionParameter[];

    // setConfigurationDescriptions(configDescriptions:ConfigDescriptionParameter[]):void;

    getConditions(): Condition[];

    setConditions(conditions:Condition[]):void;

    getActions():Action[];

    setActions(actions:Action[]):void;

    getTriggers():Trigger[];

    setTriggers(triggers:Trigger[]):void;

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