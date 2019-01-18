/**
 *
 * @author Kai Kreuzer - Initial contribution
 * @author Erdoan Hadzhiyusein - Refactored to use ZonedDateTime
 * @author Jan N. Klug - add ability to use time or date only
 */
declare class DateTimeType extends java.lang.Object implements PrimitiveType, State, Command {

    static DATE_PATTERN: string
    static DATE_PATTERN_WITH_TZ: string
    static DATE_PATTERN_WITH_TZ_AND_MS: string
    static DATE_PATTERN_WITH_TZ_AND_MS_ISO: string

    constructor();

    /**
     * @deprecated The constructor uses Calendar object hence it doesn't store time zone. A new constructor is
     *             available. Use {@link #DateTimeType(ZonedDateTime)} instead.
     *
     * @param calendar The Calendar object containing the time stamp.
     */
    constructor(calendar: Calendar);

    constructor(zoned: ZonedDateTime);

    constructor(zonedValue: string);

    public getCalendar():Calendar;

    static valueOf(value:string):DateTimeType

    public format(locale:Locale, pattern:string):String

    public compareTo(o:DecimalType): number;

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
}