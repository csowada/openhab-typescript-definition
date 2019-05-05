/**
 * The {@link RuleSupportRuleRegistryDelegate} is wrapping a {@link RuleRegistry} to provide a comfortable way to add
 * rules to the RuleManager without worrying about the need to remove rules again. Nonetheless, using the addPermanent
 * method it is still possible to add rules permanently.
 *
 * @author Simon Merschjohann
 *
 */
interface RuleSupportRuleRegistryDelegate {

    getAll(): Rule[]

    stream(): any

    get(key: string): Rule

    /**
     * This method is used to register a {@link Rule} into the {@link RuleRegistry}. First the {@link Rule} become
     * {@link RuleStatus#UNINITIALIZED}.
     * Then verification procedure will be done and the Rule become {@link RuleStatus#IDLE}.
     * If the verification fails, the Rule will stay {@link RuleStatus#UNINITIALIZED}.
     *
     * @param rule a {@link Rule} instance which have to be added into the {@link RuleRegistry}.
     * @return a copy of the added {@link Rule}
     * @throws IllegalArgumentException when a rule with the same UID already exists or some of the conditions or
     *                                  actions has wrong format of input reference.
     * @throws IllegalStateException    when the RuleManagedProvider is unavailable.
     */
    add(element: Rule): Rule

    /**
     * add a rule permanently to the RuleManager
     *
     * @param element the rule
     */
    addPermanent(element: Rule): void

    update(element: Rule): Rule

    remove(key: string): Rule

    getByTag(tag: string): Rule[]

    /**
     * called when the script is unloaded or reloaded
     */
    removeAllAddedByScript(): void

    /**
     * Gets a collection of {@link Rule}s which shares same tag.
     *
     * @param tag specifies a tag that will filter the rules.
     * @return collection of {@link Rule}s having specified tag.
     */
    getByTag(tag: string): Rule[]

    /**
     * Gets a collection of {@link Rule}s which has specified tags.
     *
     * @param tags specifies tags that will filter the rules.
     * @return collection of {@link Rule}s having specified tags.
     */
    getByTags(...tags: string[]): Rule[]
}