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