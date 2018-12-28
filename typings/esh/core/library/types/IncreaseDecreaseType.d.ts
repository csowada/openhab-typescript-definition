

// decalre class 

// declare enum IncreaseDecreaseType {
//     INCREASE,
//     DECREASE

// }

declare class IncreaseDecreaseType extends Enum implements PrimitiveType, Command {

    public static INCREASE: IncreaseDecreaseType;
    public static DECREASE: IncreaseDecreaseType;

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
}
