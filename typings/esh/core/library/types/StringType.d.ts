/**
 *
 * @author Kai Kreuzer - Initial contribution
 */
declare class StringType implements PrimitiveType, State, Command {

    constructor();

    constructor(value: string);

    public static valueOf(value: string): StringType

    /**
     * Formats the value of this type according to a pattern (see {@link Formatter}).
     *
     * @param pattern the pattern to use
     * @return the formatted string
     */
    public format(pattern:string):string;

    /**
     * Get a string representation that contains the whole internal representation of the type.
     *
     * <p>
     * The returned string could be consumed by the static 'valueOf(String)' method of the respective type to build a
     * new type that is equal to this type.
     *
     * @return a full string representation of the type to be consumed by 'valueOf(String)'
     */
    public toFullString():string;

    /**
     * Convert this {@link State}'s value into another type
     *
     * @param target the desired {@link State} type
     * @return the {@link State}'s value in the given type's representation, or <code>null</code> if the conversion was
     *         not possible
     */
    public as(target:State):State

    public format(pattern: string): string;
}