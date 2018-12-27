/**
 * convenience Rule class with an action handler. This allows to define Rules which have a execution block.
 *
 * @author Simon Merschjohann - Initial contribution
 * @author Kai Kreuzer - made it implement Rule
 *
 */
declare abstract class SimpleRule implements Rule, SimpleRuleActionHandler {

    execute(module: Action, inputs: any): any;

    public getUID(): string;

    public getTemplateUID(): string;

    /**
     * This method is used to specify the {@link RuleTemplate} identifier of the template that will be used to
     * by the {@link RuleRegistry} to resolve the {@link Rule}: to validate the {@link Rule}'s configuration, as
     * well as to create and configure the {@link Rule}'s modules.
     */
    public  setTemplateUID(templateUID: string): void;

    public getName(): string;

    /**
     * This method is used to specify the {@link Rule}'s human-readable name.
     *
     * @param ruleName the {@link Rule}'s human-readable name, or {@code null}.
     */
    public setName(ruleName: string): void

    public getTags(): string[]

    /**
     * This method is used to specify the {@link Rule}'s assigned tags.
     *
     * @param ruleTags the {@link Rule}'s assigned tags.
     */
    public setTags(ruleTags: string[]): void;

    public getDescription(): string;

    /**
     * This method is used to specify human-readable description of the purpose and consequences of the
     * {@link Rule}'s execution.
     *
     * @param ruleDescription the {@link Rule}'s human-readable description, or {@code null}.
     */
    public setDescription(ruleDescription: string): void;

    public  getVisibility(): Visibility;

    /**
     * This method is used to specify the {@link Rule}'s {@link Visibility}.
     *
     * @param visibility the {@link Rule}'s {@link Visibility} value.
     */
    public setVisibility(visibility: Visibility): void;

    public  getConfiguration(): Configuration;

    /**
     * This method is used to specify the {@link Rule}'s {@link Configuration}.
     *
     * @param ruleConfiguration the new configuration values.
     */
    public setConfiguration(ruleConfiguration: Configuration): void;

    public getConfigurationDescriptions(): ConfigDescriptionParameter[];

    /**
     * This method is used to describe with {@link ConfigDescriptionParameter}s
     * the meta info for configuration properties of the {@link Rule}.
     */
    public setConfigurationDescriptions(configDescriptions: ConfigDescriptionParameter[]): void;

    public getConditions(): Condition[]

    /**
     * This method is used to specify the conditions participating in {@link Rule}.
     *
     * @param conditions a list with the conditions that should belong to this {@link Rule}.
     */
    public setConditions(conditions: Condition[]): void;

    public getActions(): Action[];

    /**
     * This method is used to specify the actions participating in {@link Rule}
     *
     * @param actions a list with the actions that should belong to this {@link Rule}.
     */
    public setActions(actions: Action[]): void;

    /**
     * This method is used to specify the triggers participating in {@link Rule}
     *
     * @param triggers a list with the triggers that should belong to this {@link Rule}.
     */
    public setTriggers(triggers: Trigger[]): void;

    public getTriggers(): Trigger[];

    public getModules(): Module[];

    public getModules(moduleClazz:any):any[];

}