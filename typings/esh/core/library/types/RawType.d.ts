/**
 * This type can be used for all binary data such as images, documents, sounds etc.
 * Note that it is NOT adequate for any kind of streams, but only for fixed-size data.
 *
 * @author Kai Kreuzer
 * @author Laurent Garnier - add MIME type
 *
 */
declare class RawType extends java.lang.Object implements PrimitiveType, State {

    /**
     * @Deprecated
     */
    constructor();
    
    /**
     * @Deprecated
     */
    constructor(bytes: /*byte*/any[]);

    constructor(bytes: /*byte*/any[], mimeType: string);

    public getBytes(): /*byte*/any[]

    public getMimeType(): string;

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
}