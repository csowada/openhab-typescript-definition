/**
 * This type can be used for items that are dealing with telephony functionality.
 *
 * @author Thomas.Eichstaedt-Engelen / Initially CallType
 * @author Gaël L'hopital - port to Eclipse SmartHome
 *
 */
declare class StringListType implements Command, State {

    public static DELIMITER: string;
    public static ESCAPED_DELIMITER: string;
    public static REGEX_SPLITTER: string

    constructor();

    constructor(rows: string[]);

    constructor(...rows: StringType[]);

    constructor(...rows: string[]);

    /**
     * Deserialize the input string, splitting it on every delimiter not preceded by a backslash.
     */
    constructor(serialized: string);

    public getValue(index: number): string


    public static valueOf(value: string): StringListType

    /**
     * Formats the value of this type according to a pattern (see {@link Formatter}).
     *
     * @param pattern the pattern to use
     * @return the formatted string
     */
    public format(pattern:string): string;

    /**
     * Get a string representation that contains the whole internal representation of the type.
     *
     * <p>
     * The returned string could be consumed by the static 'valueOf(String)' method of the respective type to build a
     * new type that is equal to this type.
     *
     * @return a full string representation of the type to be consumed by 'valueOf(String)'
     */
    public toFullString(): string;

    /**
     * Convert this {@link State}'s value into another type
     *
     * @param target the desired {@link State} type
     * @return the {@link State}'s value in the given type's representation, or <code>null</code> if the conversion was
     *         not possible
     */
    public as(target:State): State

    public format(pattern: string): string;
}