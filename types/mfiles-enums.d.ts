/**
 * M-Files UIX Framework - Enumerations
 * 
 * This file contains all enumeration types used throughout the M-Files UIX API.
 */

declare namespace MFiles {

  /**
   * Event types that can be registered for in M-Files UIX.
   * 
   * These events are fired at various points in the M-Files application lifecycle
   * and can be used to trigger custom logic in UIX extensions.
   */
  export enum Event {
    /** Fired when a new shell frame is created */
    NewShellFrame = 7,
    /** Fired when a shell frame has started and is ready to use */
    Started = 2,
    /** Fired when a new normal shell frame is created (desktop client) */
    NewNormalShellFrame = 8,
    /** Fired when shell pane container is created for right pane */
    NewRightPane = 14,
    /** Fired when a new shell listing object is created */
    NewShellListing = 15,
    /** Fired when a new ICommands interface has been created and is ready to use */
    NewCommands = 16,
    /** Fired when the active listing has changed */
    ActiveListingChanged = 17,
    /** Fired when a tab is selected */
    TabSelected = 19,
    /** Fired when a tab is unselected */
    TabUnselected = 20,
    /** Fired when a built-in command is executed */
    BuiltinCommand = 22,
    /** Fired when a custom command is executed */
    CustomCommand = 23,
    /** Fired when the selection has changed */
    SelectionChanged = 24,
    /** Fired when selected items have changed */
    SelectedItemsChanged = 25,
    /** Fired when the listing content has changed */
    ContentChanged = 26,
    /** Fired before showing a context menu */
    ShowContextMenu = 27,
    /** Fired when the listing is activated */
    ListingActivated = 29,
    /** Fired when the listing is deactivated */
    ListingDeactivated = 30,
    /** Fired when the window is being closed */
    CloseWindow = 33,
    /** Fired when a new item is added to the listing */
    ListItemAdded = 152,
    /** Fired when a listing item is modified */
    ListItemModified = 153,
    /** Fired when a listing item is removed */
    ListItemRemoved = 154,
    /** Fired when facet values are ready */
    FacetValuesReady = 162,
    /** Broadcasted message to multiple applications */
    CrossApplicationNotification = 168,
    /** Fired when a new left pane is created */
    NewLeftPane = 170,
    /** Fired to select the next object in the listing */
    SelectNextObject = 174,
    /** Fired to select the previous object in the listing */
    SelectPreviousObject = 175,
    /** Fired to select the next object file */
    SelectNextObjectFile = 176,
    /** Fired to select the previous object file */
    SelectPreviousObjectFile = 177,
    /** Fired to select the next folder */
    SelectNextFolder = 178,
    /** Fired to select the previous folder */
    SelectPreviousFolder = 179,
    /** Fired when the view page has changed */
    ViewPageChanged = 180,
    /** Fired before view location changes */
    StartPageChange = 181,
    /** Fired when the listing page has changed */
    ListingPageChanged = 182,
    /** Fired when a refresh is requested */
    Refresh = 185,
    /** Fired when column global sorting has changed */
    ColumnGlobalSortingChanged = 187,
    /** Fired when the view location has changed */
    ViewLocationChanged = 188,
    /** Fired asynchronously when the view location has changed */
    ViewLocationChangedAsync = 189,
    /** Fired when view creation has started */
    ViewCreationStarted = 190,
    /** Fired when custom data has changed */
    CustomDataChanged = 199
  }

  /**
   * Built-in icon enumeration for M-Files UI elements.
   * 
   * These icons can be used when setting icons for custom commands and UI elements.
   */
  export enum BuiltInIcon {
    BuiltInIcon_CheckOut = 0,
    BuiltInIcon_CheckIn = 1,
    BuiltInIcon_History = 2,
    BuiltInIcon_MakeCopy = 3,
    BuiltInIcon_View = 4,
    BuiltInIcon_Workflow = 5,
    BuiltInIcon_Assignment = 6,
    BuiltInIcon_MarkComplete = 7,
    BuiltInIcon_TraditionalFolder = 8,
    BuiltInIcon_ChangeState = 9,
    BuiltInIcon_DocumentCollection = 10,
    BuiltInIcon_DefaultFile = 11,
    BuiltInIcon_Property = 12,
    BuiltInIcon_Undo = 13,
    BuiltInIcon_User = 14,
    BuiltInIcon_Group = 15,
    BuiltInIcon_NewItem = 16,
    BuiltInIcon_ContactPerson = 17,
    BuiltInIcon_StatusBlue = 18,
    BuiltInIcon_CircleBlue = 19,
    BuiltInIcon_Favorite = 20,
    BuiltInIcon_Idea = 21,
    BuiltInIcon_Bubble = 22,
    BuiltInIcon_Delete = 23
  }

  /**
   * Menu location enumeration.
   * 
   * Specifies detailed menu locations where custom commands can be added.
   * This allows precise control over where commands appear in the M-Files UI.
   * 
   * NOTE: Stability is experimental. Non-backward compatible changes or removal
   * may occur in any future release. Use of this feature is not recommended
   * for production environments.
   */
  export enum MenuLocation {
    /** TopPane Menu, typically used for the UI Extension applications */
    MenuLocation_TopPaneMenu = 47,
    /** Menu location for the Activity view Context menu group 1 */
    MenuLocation_ActivityContextMenu_1 = 48,
    /** Menu location for the Activity view Context menu group 2 */
    MenuLocation_ActivityContextMenu_2 = 49,
    /** Menu location for the Activity view Context menu group 3 */
    MenuLocation_ActivityContextMenu_3 = 50,
    /** Menu location for the context menu position for the open commands */
    MenuLocation_ContextMenu_Open = 51,
    /** Menu location for the context menu position for the checkout commands */
    MenuLocation_ContextMenu_Checkout = 52,
    /** Menu location for the context menu position for the share commands */
    MenuLocation_ContextMenu_Share = 53,
    /** Menu location for the position of object operations in the context menu */
    MenuLocation_ContextMenu_ObjectOperations = 26,
    /** Menu location for the context menu position for document conversions */
    MenuLocation_ContextMenu_DocumentConversions = 41,
    /** Menu location for the context menu position for the workflow action commands */
    MenuLocation_ContextMenu_WorkflowActions = 54,
    /** Menu location for the context menu position for the organize commands */
    MenuLocation_ContextMenu_Organize = 55,
    /** Menu location for the context menu position for the version control commands */
    MenuLocation_ContextMenu_VersionControl = 56,
    /** Menu location for the context menu position for the create commands */
    MenuLocation_ContextMenu_Create = 57,
    /** Menu location for the context menu position for the view options commands */
    MenuLocation_ContextMenu_ViewOptions = 58,
    /** Menu location for the context menu position for the grouping commands */
    MenuLocation_ContextMenu_Group = 59,
    /** Menu location for the context menu position for the display options commands */
    MenuLocation_ContextMenu_DisplayOptions = 60,
    /** Menu location for the context menu position for Edit commands */
    MenuLocation_ContextMenu_Edit = 37,
    /** Menu location for the bottom of the context menu */
    MenuLocation_ContextMenu_Bottom = 43,
    /** Menu location for the context menu position for more commands */
    MenuLocation_ContextMenu_More = 99,
    /** Menu location for the first command group in the task bar */
    MenuLocation_TaskBar_First = 200,
    /** Menu location for the "Main Actions" command group in the task bar */
    MenuLocation_TaskBar_MainActions = 210,
    /** Menu location for the "Assignments" command group in the task bar */
    MenuLocation_TaskBar_Assignments = 220,
    /** Menu location for the "Document Collections" command group in the task bar */
    MenuLocation_TaskBar_DocumentCollections = 230,
    /** Menu location for the "Check In" command group in the task bar */
    MenuLocation_TaskBar_CheckIn = 240,
    /** Menu location for the "Workflow States" command group in the task bar */
    MenuLocation_TaskBar_WorkflowStates = 250,
    /** Menu location for the last command group in the task bar */
    MenuLocation_TaskBar_Last = 399
  }

  /**
   * Command location enumeration.
   * 
   * Specifies where a command can be located in the M-Files UI (menu, toolbar, etc.).
   */
  export enum CommandLocation {
    /** Undefined location */
    Undefined = 0,
    /** Command is in the main menu */
    MainMenu = 1,
    /** Command is in the context menu */
    ContextMenu = 2,
    /** Command is in the activity context menu */
    ActivityContextMenu = 6,
    /** Command is in the task bar */
    TaskBar = 7,
    /** Command is in all locations */
    All = 268435455
  }

  /**
   * Command state enumeration.
   * 
   * Specifies the visibility and enabled state of a command.
   */
  export enum CommandState {
    /** Command state is undefined */
    CommandState_Undefined = 0,
    /** Command is active and visible */
    CommandState_Active = 1,
    /** Command is hidden */
    CommandState_Hidden = 3
  }

  /**
   * Facet range type enumeration.
   * 
   * Specifies the type of range for facet filtering.
   */
  export enum FacetRangeType {
    /** Predefined ranges */
    predefined = "predefined",
    /** Numeric ranges */
    numeric = "numeric"
  }

  /**
   * Facet transformation enumeration.
   * 
   * Specifies how facet values should be transformed for display.
   */
  export enum FacetTransformation {
    /** Transform by year */
    year = "year",
    /** Transform by month */
    month = "month",
    /** Transform by custom range */
    range = "range",
    /** No transformation */
    none = "none"
  }

  /**
   * Facet type enumeration.
   * 
   * Specifies the type of facet for filtering.
   */
  export enum FacetType {
    /** Object Type facet */
    OT = "OT",
    /** Property Value facet */
    PV = "PV",
    /** Property Definition facet */
    PD = "PD",
    /** Value List facet */
    VL = "VL",
    /** Value List Object Type facet */
    VLOT = "VLOT",
    /** File Type facet */
    FILETYPE = "FILETYPE"
  }

  /**
   * Facet value type enumeration.
   * 
   * Specifies the data type of facet values.
   */
  export enum FacetValueType {
    /** Unknown value type */
    Unknown = 0,
    /** Lookup value (reference to another object) */
    Lookup = 1,
    /** String value */
    String = 2,
    /** Numeric value */
    Numeric = 3,
    /** Numeric range value */
    NumericRange = 4
  }

  /**
   * Icon content type enumeration.
   * 
   * Specifies the format of icon content when setting custom icons.
   */
  export enum IconContentType {
    /** Icon is in SVG format */
    SVG = "svg",
    /** Icon is in Base64-encoded format */
    BASE64 = "base64",
    /** Icon is a file path */
    PATH = "path",
    /** Icon is a built-in M-Files icon */
    BUILT_IN = "built_in"
  }

  /**
   * M-Files built-in object type enumeration.
   * 
   * Specifies standard object types defined in M-Files.
   */
  export enum MFBuiltInObjectType {
    /** Document object type */
    Document = 0,
    /** Document Collection object type */
    DocumentCollection = 9,
    /** Assignment object type */
    Assignment = 10,
    /** Report object type */
    Report = 15
  }

  /**
   * M-Files built-in property definition enumeration.
   * 
   * Specifies standard property definitions in M-Files.
   */
  export enum MFBuiltInPropertyDef {
    /** Name or Title property */
    NameOrTitle = 0,
    /** Created date/time property */
    Created = 20,
    /** Last Modified date/time property */
    LastModified = 21,
    /** Single File Object property */
    SingleFileObject = 22
  }

  /**
   * M-Files built-in value list enumeration.
   * 
   * Specifies standard value lists in M-Files.
   */
  export enum MFBuiltInValueList {
    /** Documents value list */
    Documents = 0,
    /** Classes value list */
    Classes = 1,
    /** Class Groups value list */
    ClassGroups = 2,
    /** Version Labels value list */
    VersionLabels = 3,
    /** Traditional Folders value list */
    TraditionalFolders = 4,
    /** External Locations value list */
    ExternalLocations = 5,
    /** Users value list */
    Users = 6,
    /** Workflows value list */
    Workflows = 7,
    /** States value list */
    States = 8,
    /** Collections value list */
    Collections = 9,
    /** User Groups value list */
    UserGroups = 16,
    /** State Transitions value list */
    StateTransitions = 17
  }

  /**
   * M-Files built-in view enumeration.
   * 
   * Specifies standard views available in M-Files.
   */
  export enum MFBuiltInView {
    /** Checked Out To Current User view */
    CheckedOutToCurrentUser = 5,
    /** Offline view */
    Offline = 6,
    /** Recently Modified By Me view */
    RecentlyModifiedByMe = 7,
    /** Templates view */
    Templates = 8,
    /** Assigned To Me view */
    AssignedToMe = 9,
    /** Latest Searches view */
    LatestSearches = 11,
    /** By ID view */
    ByID = 12,
    /** Built-in view */
    BuiltIn = 13,
    /** Recently Accessed By Me view */
    RecentlyAccessedByMe = 14,
    /** Favorites view */
    Favorites = 15
  }

  /**
   * Object window result code enumeration.
   * 
   * Specifies the result code returned from object creation/edit windows.
   */
  export enum ObjectWindowResultCode {
    /** Object window was closed with OK */
    MFObjectWindowResultCodeOk = 0,
    /** Object window was closed with Cancel */
    MFObjectWindowResultCodeCancel = 1,
    /** Object window was closed with OK to All */
    MFObjectWindowResultCodeOkToAll = 2,
    /** Object window was closed with Skip This */
    MFObjectWindowResultCodeSkipThis = 3
  }

  /**
   * Search engine type enumeration.
   * 
   * Specifies the type of search engine used by the vault.
   */
  export enum SearchEngine {
    /** Search engine type is unspecified */
    SEARCH_ENGINE_UNSPECIFIED = 0,
    /** DT Search engine */
    SEARCH_ENGINE_DT_SEARCH = 1,
    /** IDOL search engine */
    SEARCH_ENGINE_IDOL = 2,
    /** Azure Search engine */
    SEARCH_ENGINE_AZURE_SEARCH = 3,
    /** Smart Search engine */
    SEARCH_ENGINE_SMART_SEARCH = 4,
    /** AINO Search engine */
    SEARCH_ENGINE_AINO_SEARCH = 5,
    /** Goldfish search engine */
    SEARCH_ENGINE_GOLDFISH = 6
  }

  /**
   * Toast notification type enumeration.
   * 
   * Specifies the type/severity of a toast notification message.
   */
  export enum ToastType {
    /** Information toast */
    ToastType_Info = 0,
    /** Success toast */
    ToastType_Success = 1,
    /** Warning toast */
    ToastType_Warning = 2,
    /** Error toast */
    ToastType_Error = 3
  }

  /**
   * Folder type enumeration.
   * 
   * Specifies the type of folder in the M-Files hierarchy.
   */
  export enum FolderType {
    /** Unknown folder type */
    FOLDER_TYPE_UNKNOWN = 0,
    /** Any folder type */
    FOLDER_TYPE_ANY_FOLDER = 1,
    /** View folder */
    FOLDER_TYPE_VIEW_FOLDER = 2,
    /** Property (virtual) folder */
    FOLDER_TYPE_PROPERTY_FOLDER = 3,
    /** Traditional folder */
    FOLDER_TYPE_TRADITIONAL_FOLDER = 4,
    /** Search folder (extended view folder) */
    FOLDER_TYPE_SEARCH_FOLDER = 5,
    /** External view folder */
    FOLDER_TYPE_EXTERNAL_VIEW_FOLDER = 6
  }

}