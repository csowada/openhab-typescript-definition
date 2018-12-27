/**
 * Interface for classes that instances provide an identifier.
 *
 * @author Markus Rathgeb - Initial contribution
 */
interface Identifiable<T> {

    /**
     * Get the unique identifier.
     *
     * @return the unique identifier
     */
    getUID(): T
}