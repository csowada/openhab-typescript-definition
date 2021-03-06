/**
 *
 * @author Kai Kreuzer - Initial contribution
 */
declare class OnOffType extends Enum implements PrimitiveType, State, Command {

    public static ON: OnOffType;
    public static OFF: OnOffType;

    /**
     * Converts a String value "ON" or "1" to {@link OnOffType#ON} or else to {@link OnOffType#OFF}.
     *
     * @param state String to convert to {@link OnOffType}
     * @return returns the ON or OFF state based on the String
     */
    public static from(state: string): OnOffType;

    /**
     * @param state boolean to convert to {@link OnOffType}
     * @return returns the ON or OFF state based on the boolean
     */
    public static from( state: boolean): OnOffType;

    /**
     * Formats the value of this type according to a pattern (see {@link Formatter}).
     *
     * @param pattern the pattern to use
     * @return the formatted string
     */
    format(pattern:string):string;

    /**
     * Get a string representation that contains the whole internal representation of the type.
     *
     * <p>
     * The returned string could be consumed by the static 'valueOf(String)' method of the respective type to build a
     * new type that is equal to this type.
     *
     * @return a full string representation of the type to be consumed by 'valueOf(String)'
     */
    toFullString():string;

    /**
     * Convert this {@link State}'s value into another type
     *
     * @param target the desired {@link State} type
     * @return the {@link State}'s value in the given type's representation, or <code>null</code> if the conversion was
     *         not possible
     */
    as(target:State):State
}