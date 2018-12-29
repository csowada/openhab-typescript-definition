declare class PointType implements ComplexType, Command, State {
    // external format patterns for output
    public static LOCATION_PATTERN: string

    public static EARTH_GRAVITATIONAL_CONSTANT: number;
    public static WGS84_A: number;// = 6378137; // The equatorial radius of WGS84 ellipsoid (6378137 m).

    // constants for the constituents
    public static KEY_LATITUDE: string
    public static KEY_LONGITUDE: string
    public static KEY_ALTITUDE: string

    /**
     * Default constructor creates a point at sea level where the equator
     * (0° latitude) and the prime meridian (0° longitude) intersect.
     * A nullary constructor is needed by
     * {@link org.eclipse.smarthome.core.internal.items.ItemUpdater#receiveUpdate})
     */
    constructor();

    constructor(latitude: DecimalType, longitude: DecimalType);

    constructor(latitude: DecimalType, longitude: DecimalType, altitude: DecimalType);

    constructor(latitude: StringType, longitude: StringType);

    constructor(latitude: StringType, longitude: StringType, altitude:StringType );

    constructor(value: string);

    public getLatitude(): DecimalType

    public getLongitude():DecimalType

    public getAltitude():DecimalType

    public setAltitude(altitude: DecimalType): void;

    public  getGravity(): DecimalType

    /**
     * Return the distance in meters from otherPoint, ignoring altitude. This algorithm also
     * ignores the oblate spheroid shape of Earth and assumes a perfect sphere, so results
     * are inexact.
     *
     * @param otherPoint
     * @return distance in meters
     * @see <a href="https://en.wikipedia.org/wiki/Haversine_formula">Haversine formula</a>
     */
    public distanceFrom(otherPoint: PointType): DecimalType

    public static valueOf(value: string): PointType
    /**
     * Returns all constituents with their names as a sorted map
     *
     * @return all constituents with their names
     */
    public getConstituents(): {[index: string]: PrimitiveType};

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

    /**
     * Convert this {@link State}'s value into another type
     *
     * @param target the desired {@link State} type
     * @return the {@link State}'s value in the given type's representation, or <code>null</code> if the conversion was
     *         not possible
     */
    public as(target:State): State
}