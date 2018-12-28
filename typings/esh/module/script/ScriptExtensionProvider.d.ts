/**
 * A {@link ScriptExtensionProvider} can provide variable and types on ScriptEngine instance basis.
 *
 * @author Simon Merschjohann- Initial contribution
 *
 */
interface ScriptExtensionProvider {
    /**
     * These presets will always get injected into the ScriptEngine on instance creation.
     *
     * @return collection of presets
     */
    getDefaultPresets(): string[];
    /**
     * Returns the provided Presets which are supported by this ScriptExtensionProvider.
     * Presets define imports which will be injected into the ScriptEngine if called by "importPreset".
     *
     * @return provided presets
     */
    getPresets(): string[];
    /**
     * Returns the supported types which can be received by the given ScriptExtensionProvider
     *
     * @return provided types
     */
    getTypes(): string[];
    /**
     * This method should return an Object of the given type. Note: get can be called multiple times in the scripts use
     * caching where appropriate.
     *
     * @param scriptEngine the script engine instance requesting the given type
     * @param type
     * @return
     */
    get(type: string): any;
    /**
     * This method should return variables and types of the concrete type which will be injected into the ScriptEngines
     * scope.
     *
     * @param scriptEngineId - the script engine which will receive the preset
     */
    importPreset(preset: string): any;
}
