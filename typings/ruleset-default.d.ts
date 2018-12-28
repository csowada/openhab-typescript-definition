declare const State: State;
declare const Command: State;
declare const DateTime: any;                //org.joda.time.DateTime (if Jodatime is available)
declare const LocalTime: any;               //org.joda.time.LocalTime (if Jodatime is available)
declare const StringUtils: any;             //org.apache.commons.lang.StringUtils
declare const URLEncoder: any;              //java.net.URLEncoder
declare const FileUtils: any;               //org.apache.commons.io.FileUtils
declare const FilenameUtils: any;           //org.apache.commons.io.FilenameUtils
declare const File: java.io.File;           //java.io.File

declare const OnOffType: XType;
declare const ON: XType;
declare const OFF: XType;
declare const IncreaseDecreaseType: XXType; // org.eclipse.smarthome.core.library.types.IncreaseDecreaseType
declare const DECREASE: XXType;             // IncreaseDecreaseType enum item
declare const INCREASE: XXType;             // IncreaseDecreaseType enum item
declare const OpenClosedType: XType;        // org.eclipse.smarthome.core.library.types.OnOffType
declare const CLOSED: XType;                // OpenClosedType enum item
declare const OPEN: XType;                  // OpenClosedType enum item
declare const StopMoveType: XXType;         // org.eclipse.smarthome.core.library.types.StopMoveType
declare const MOVE: XXType;                 // StopMoveType enum item
declare const STOP: XXType;                 // StopMoveType enum item
declare const UpDownType: XType;            // org.eclipse.smarthome.core.library.types.UpDownType
declare const DOWN: XType;                  // UpDownType enum item
declare const UP: XType;                    // UpDownType enum item
declare const UnDefType: XType;             // org.eclipse.smarthome.core.library.types.UnDefType
declare const NULL: XType;                  // UnDefType enum item
declare const UNDEF: XType;                 // UnDefType enum item
declare const RewindFastforwardType: XType; // org.eclipse.smarthome.core.library.types.RewindFastforwardType
declare const REWIND: XType;                // RewindFastforwardType enum item
declare const FASTFORWARD: XType;           // RewindFastforwardType enum item
declare const NextPreviousType: XType;      // org.eclipse.smarthome.core.library.types.NextPreviusType
declare const NEXT: XType;                  // NextPreviousType enum item
declare const PREVIOUS: XType;              // NextPreviousType enum item
declare const PlayPauseType: XType;         // org.eclipse.smarthome.core.library.types.PlayPauseType
declare const PLAY: XType;                  // PlayPauseType enum item
declare const PAUSE: XType;                 // PlayPauseType enum item

// declare const DecimalType: DecimalType;
declare const QuantityType: XType;          // org.eclipse.smarthome.core.library.types.QuantityType
declare const HSBType: XType;               // org.eclipse.smarthome.core.library.types.HSBType
declare const PercentType: XType;           // org.eclipse.smarthome.core.library.types.PercentType
declare const PointType: XType;             // org.eclipse.smarthome.core.library.types.PointType
declare const StringType: XType;            // org.eclipse.smarthome.core.library.types.StringType
declare const StringListType: XType;        // org.eclipse.smarthome.core.library.types.StringListType
declare const RawType: XType;               // org.eclipse.smarthome.core.library.types.RawType

declare const SIUnits: XType;               // org.eclipse.smarthome.core.library.unit.SIUnits
declare const ImperialUnits: XType;         // org.eclipse.smarthome.core.library.unit.ImperialUnits
declare const MetricPrefix: XType;          // org.eclipse.smarthome.core.library.unit.MetricPrefix
declare const SmartHomeUnits: XType;        // org.eclipse.smarthome.core.library.unit.SmartHomeUnits

declare const items: any;                   // ItemRegistryDelegate implements Map<String, State>
declare const itemRegistry: ItemRegistry;
declare const ir: ItemRegistry;
declare const things: any;              // ThingRegistry;
declare const events: SimpleBusEvent;

declare const rules: any;               //RuleRegistry;
declare const scriptExtension: ScriptExtensionProvider;
declare const se: ScriptExtensionProvider;