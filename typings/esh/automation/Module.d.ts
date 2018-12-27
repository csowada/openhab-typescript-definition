/**
 * Modules are building components of the {@link Rule}s. Each Module is
 * identified by id, which is unique in scope of the {@link Rule}. It also has a {@link ModuleType} which provides meta
 * data of the module. The meta data
 * defines {@link Input}s, {@link Output}s and {@link ConfigDescriptionParameter}s parameters of the {@link Module}.
 * <br>
 * Setters of the module don't have immediate effect on the Rule. To apply the
 * changes, they should be set on the {@link Rule} and the Rule has to be
 * updated by RuleManager
 *
 * @author Yordan Mihaylov - Initial Contribution
 *
 */
declare abstract class Module {

    /**
     * Id of the Module. It is mandatory and unique identifier in scope of the {@link Rule}. The id of the
     * {@link Module} is used to identify the module
     * in the {@link Rule}.
     */
    id: string;

    /**
     * The label is a short, user friendly name of the {@link Module} defined by
     * this descriptor.
     */
    label: string;

    /**
     * The description is a long, user friendly description of the {@link Module} defined by this descriptor.
     */
    description: string;

    /**
     * Configuration values of the Module.
     *
     * @see {@link ConfigDescriptionParameter}.
     */
    configuration: Configuration; //Configuration

    /**
     * Unique type id of this module.
     */
    type: string;
}