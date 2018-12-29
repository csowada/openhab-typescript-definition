/**
 *
 * @author Kai Kreuzer - Initial contribution
 */
declare class NextPreviousType extends Enum implements PrimitiveType, Command {

    public static NEXT: NextPreviousType;
    public static PREVIOUS: NextPreviousType;

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
     * Formats the value of this type according to a pattern (see {@link Formatter}).
     *
     * @param pattern the pattern to use
     * @return the formatted string
     */
    public format(pattern:string):string;
}