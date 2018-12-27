/**
 * This class provides common functionality for creating {@link Condition} instances by supplying their
 * meta-information. Each {@link ConditionType} is uniquely identifiable in scope of the {@link ModuleTypeRegistry} and
 * defines {@link ConfigDescriptionParameter}s that are meta-information for configuration of the future
 * {@link Condition} instances and meta-information for {@link Input}s used from these {@link Condition} instances.
 *
 * @author Yordan Mihaylov - Initial Contribution
 * @author Ana Dimova - Initial Contribution
 * @author Vasil Ilchev - Initial Contribution
 */
declare class ConditionType extends ModuleType {
    
    // constructors missing

        /**
     * Gets the meta-information descriptions of {@link Input}s defined by this {@link ConditionType}.
     *
     * @return a {@link List} of {@link Input} meta-information descriptions.
     */
    public getInputs(): Input[]
}