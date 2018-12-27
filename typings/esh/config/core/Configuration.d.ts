
/**
 * This class is a wrapper for configuration settings of {@link Thing}s.
 *
 * @author Dennis Nobel - Initial API and contribution, Changed Logging
 * @author Kai Kreuzer - added constructors and normalization
 * @author Gerhard Riegler - added converting BigDecimal values to the type of the configuration class field
 * @author Chris Jackson - fix concurrent modification exception when removing properties
 */
declare class Configuration {

    constructor(properties: any)

    /**
     * Check if the given key is present in the configuration.
     *
     * @param key the key that existence should be checked
     * @return true if the key is part of the configuration, false if not
     */
    containsKey(key:string):boolean;

    get(key:string):any;

    put(key:string, value:any):any

    remove(key:string):any

    keySet():string[];

    values():any[];

    getProperties(): {[index: string]: any}; //Map<String, Object>

    setProperties(properties:{[index: string]: any}):void; //Map<String, Object> properties

}