/**
 * This is a parent interface for all states and commands.
 * It was introduced as many states can be commands at the same time and
 * vice versa. E.g a light can have the state ON or OFF and one can
 * also send ON and OFF as commands to the device. This duality is
 * captured by this marker interface and allows implementing classes
 * to be both state and command at the same time.
 *
 * @author Kai Kreuzer - Initial contribution and API
 * @author Markus Rathgeb - Add the simple and full type string methods
 */
interface Type extends java.lang.IObject {

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