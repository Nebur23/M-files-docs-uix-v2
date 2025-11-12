// lib/mfiles-uix-v2.d.ts
/**
 * M-Files UIX Framework TypeScript Definitions
 * Version: 2.0
 * 
 * This file provides TypeScript definitions for the M-Files User Interface Extensibility (UIX) Framework.
 * UIX allows developers to customize and extend the M-Files Web and Desktop client user interface.
 */

declare namespace MFiles {

  // ============================================================================
  // ENUMERATIONS
  // ============================================================================

  /**
   * Event types that can be registered for in M-Files UIX
   */
  enum Event {
    /** Fired when a new shell frame is created */
    NewShellFrame = "NewShellFrame",
    /** Fired when a shell frame has started and is ready to use */
    Started = "Started",
    /** Fired when a new normal shell frame is created (desktop client) */
    NewNormalShellFrame = "NewNormalShellFrame",
    /** Fired when the shell UI is ready */
    NewShellUI = "NewShellUI",
    /** Fired when a dashboard is being started */
    StartDashboard = "StartDashboard",
    /** Fired when the active view has changed */
    ActiveViewChanged = "ActiveViewChanged",
    /** Fired when selection has changed */
    SelectionChanged = "SelectionChanged",
    /** Fired before a command is executed */
    CustomCommand = "CustomCommand"
   
  }

  enum IShellFameEvents {
    /**
     * Sent before the IShellFrame is stopped.
     */
    Stop = "Stop",

     /**
     * Registers event handler for the IShellFrame started      event, which means that the IShellFrame
      is ready to be used. This event will trigger at least once for each registered callback
      if the IShellFrame is already started and not yet stopped.
     */
    Started = "Started",

     /**
     * Registers event handler for the IShellFrame ViewLocationChanged event, which means that the view location has changed.
     */
    ViewLocationChanged = "ViewLocationChanged",

     /**
     * Registers event handler for the IShellFrame ViewLocationChangedAsync event, which means that the view location has changed.
     */
    ViewLocationChangedAsync = "ViewLocationChangedAsync",

     /**
     * Registers event handler for the IShellFrame NewCommands event, which means that a new ICommands interface has been created and is ready to be used.
     */
    NewCommands = "NewCommands",

     /**
     * Registers event handler for the IShellFrame NewRightPane event, which means that a shell pane container is created for right shell pane.
     */
    NewRightPane = "NewRightPane",

     /**
     * Registers event handler for the IShellFrame NewShellListing event, which means that a new shell listing object is created.
     * 
     * @argument- newShellisting (The new IShellListing object.)
     */
    NewShellListing = "NewShellListing"


  }

  enum IShellUIEventsEnum {
    /**
     * Sent when the object turns to started state.
     */
    Started = "Started",

     /**
     * Register event to listen for the stop event.
     */
    Stop = "Stop",

     /**
       * Register event handler for the NewShellFrame event. This event is triggered when any shell frame object is created,
      including normal shell frames, common dialogs, and embedded or special shell frames.
      @argument - shellFrame 
     */
    NewShellFrame = "NewShellFrame",

     /**
     * Register event handler for the NewNormalShellFrame event. This event is triggered when a normal shell frame object is created.
    Note that this event is not triggered for common dialogs, or embedded or special shell frames.
    @argument -  shellFrame (The new shell frame object.)
     */
    NewNormalShellFrame = "NewNormalShellFrame",

     /**
     * Broadcasted message to multiple applications.
     * @argument - appGUID (GUID of the target application, or null if broadcasted to all applications)
     * @argument - msgId (ID of the message which is sent to the other applications.) 
     * @argument - data (Custom data to be sent.)
     */
    CrossApplicationNotification = "CrossApplicationNotification",

  }

  /**
   * Menu locations where custom commands can be added
   */
  enum MenuLocation {
    /** Top pane menu (main menu bar) */
    MenuLocation_TopPaneMenu = "TopPaneMenu",
    /** Context menu for objects */
    MenuLocation_ContextMenu_ObjectList = "ContextMenu_ObjectList",
    /** Context menu for folders */
    MenuLocation_ContextMenu_FolderList = "ContextMenu_FolderList",
    /** Task pane menu */
    MenuLocation_TaskPane = "TaskPane"
  }

  /**
   * Dashboard configuration options
   */
  enum DashboardPanel {
    /** Main dashboard panel */
    MainPanel = "main",
    /** Right panel */
    RightPanel = "right",
    /** Bottom panel */
    BottomPanel = "bottom"
  }

 

  // ============================================================================
  // CORE INTERFACES
  // ============================================================================

  /**
   * Represents the M-Files Vault connection
   */
  interface Vault {
    /** The name of the vault */
    Name: string;

    /** The GUID of the vault */
    GUID: string;

    /**
     * Logs out from the vault
     */
    Logout(): void;

    /**
     * Gets the vault properties
     */
    GetProperties(): VaultProperties;

    /**
     * Executes a vault extension method
     * @param method - The method name to execute
     * @param params - Parameters to pass to the method
     */
    ExtensionMethodCall<T = any>(method: string, params?: any): Promise<T>;
  }

  /**
   * Vault properties and metadata
   */
  interface VaultProperties {
    Name: string;
    GUID: string;
    Version: string;
  }

  /**
   * Event handling system
   */
  interface Events {
    /**
     * Registers an event handler
     * @param event - The event type to register for
     * @param handler - The function to call when the event fires
     */
    Register(event: Event | string, handler: Function): number;

    /**
     * Unregisters an event handler
     * @param eventHandlerId - The ID returned from Register()
     */
    Unregister(eventHandlerId: number): void;
  }

  /**
   * Command management system
   */
  interface Commands {
    /**
     * Creates a custom command
     * @param name - The display name of the command
     * @returns The command ID
     */
    CreateCustomCommand(name: string): Promise<number>;

    /**
     * Adds a custom command to a menu location
     * @param commandId - The command ID
     * @param location - The menu location
     * @param priority - The display priority (lower numbers appear first)
     */
    AddCustomCommandToMenu(
      commandId: number,
      location: MenuLocation | string,
      priority: number
    ): Promise<void>;

    /**
     * Sets the icon for a command
     * @param commandId - The command ID
     * @param iconUrl - URL to the icon image
     */
    SetIconFromUrl(commandId: number, iconUrl: string): Promise<void>;

    /**
     * Executes a built-in command
     * @param commandId - The built-in command ID
     */
    ExecuteCommand(commandId: number): Promise<void>;

    /**
     * Sets whether a command is enabled
     * @param commandId - The command ID
     * @param enabled - Whether the command should be enabled
     */
    SetCommandState(commandId: number, enabled: boolean): Promise<void>;
  }

  /**
   * IShellItems represent a list of Objects in IShellListing, usually the current selection or list of all items in the view.
   */
  interface IShellItems {
    /**
     * Properties
     */

    Count : number

    Folders: IFolder

    ObjectFiles : string // todo

    ObjectVersions : string // todo

    /**
     * Methods
     */
}

  /**
   * Instances of IShellListing represent the Objects inside the Listing View tree in the M-Files Client application UI. The interface is available for example from ActiveListing property of IShellFrame.
   */
  interface IShellListing{
     /**
     * Properties
     */

     /**Gets the current location as a path. */
     CurrentPath : string

     CurrentSelection : string



    /**
     * Methods
     */
    
  }


  /**
   * Shell frame represents a single window/frame in M-Files
   */
  interface ShellFrame {

     /** Properties  */

     ActiveListing : string;

    /** The vault associated with this shell frame */
    Vault: Vault;

    /** Event system for this shell frame */
    Events: Events;

    /** Command management for this shell frame */
    Commands: Commands;

    /** Dashboard management */
    Dashboards: Dashboards;

    /** Listing management */
    Listing: ShellListing;

    /** Methods  */

    /**
     * Shows a message to the user
     * @param message - The message to display
     */
    ShowMessage(message: string): void;

    /**
     * Shows a popup dashboard
     * @param dashboardId - The ID of the dashboard to show
     */
    ShowPopupDashboard(dashboardId: string): Promise<void>;
  }

  /**
   * Dashboard management interface
   */
  interface Dashboards {
    /**
     * Creates a new dashboard
     * @param id - Unique identifier for the dashboard
     * @returns Dashboard object
     */
    CreateDashboard(id: string): Promise<Dashboard>;

    /**
     * Gets an existing dashboard
     * @param id - The dashboard ID
     */
    GetDashboard(id: string): Promise<Dashboard>;
  }

  /**
   * Dashboard interface for custom UI panels
   */
  interface Dashboard {
    /** The dashboard ID */
    ID: string;

    /**
     * Sets the content of the dashboard
     * @param content - HTML content or URL
     */
    SetContent(content: string): Promise<void>;

    /**
     * Shows the dashboard
     */
    Show(): Promise<void>;

    /**
     * Hides the dashboard
     */
    Hide(): Promise<void>;
  }

  /**
   * Shell listing interface for working with object lists
   */
  interface ShellListing {
    /**
     * Gets the currently selected items
     */
    GetSelectedItems(): Promise<ObjectVersion[]>;

    /**
     * Refreshes the current listing
     */
    Refresh(): Promise<void>;
  }

  /**
   * Represents an object version in M-Files
   */
  interface ObjectVersion {
    /** Object type ID */
    ObjType: number;

    /** Object ID */
    ObjID: number;

    /** Version number */
    Version: number;

    /** Display ID (e.g., "Document 123") */
    DisplayID: string;

    /** Object title */
    Title: string;
  }

  /**
   * Shell UI represents the overall M-Files UI instance.
   * The IShellUI is available for the Modules on the module startup event.
   * The IShellUI is available for the Dashboards from the ShellFrame property of the IDashboard.
   */
  interface ShellUI {

    /** Properties */

    /** The vault connection 
     * Returns the logged-in M-Files server connection.
    */
    Vault: Vault;

    /** Returns the event registering interface of the IShellUI interface.*/
    Events: IShellUIEvents;


    /** Methods */

    /**
     * Sends a synchronous broadcast message to all shellUI modules of all applications running in the current shellUI (main-window).
     */
    BroadcastMessage() : void

    /**
     * Returns the file type icon from the filename extension as data url.
     */
    GetFileTypeIconURL() : void

    /**
     * Gets the URL of the icon for the specified object type.
     */
    GetObjectTypeIconURL() : void

    /**
     * Retrieves the URL of the icon associated with a specific value list item.
     */
    GetValueListItemIconURL() : void

    /**
     * Sends a synchronous notification message to all shellUI modules of a specific application running in the current shellUI (main-window).
     */
    NotifyApplication() : void

    GetValueListItemIconURL() : void

     /**
     * Shows the default M-Files message box with the specified content and appearance.
     * @param message - The message to display
     */
    ShowMessage(message: string): void;


    /**
     * Shows a dashboard in a separate window.
     */
    ShowPopupDashboard() : void
  }

  /**
  * Interface for the Shell UI events.The interface provides two methods
  */
  interface IShellUIEvents {
    /**
     * Registers an event handler
     * @param event - The event type to register for ShellUI(Started, Stop, NewShellFrame, NewNormalShellFrame, CrossApplicationNotification)
     * @param handler - The function to call when the event fires
     */
    Register(event: string, handler: Function): number;

    /**
     * Unregisters an event handler
     * @param eventHandlerId - The ID returned from Register()
     */
    Unregister(eventHandlerId: number): void;
  }

  /**
   * Custom command event data
   */
  interface CustomCommandEventData {
    /** The command ID that was executed */
    CommandId: number;

    /** The shell frame where the command was executed */
    ShellFrame: ShellFrame;
  }
}


//Utils ----------------
 //

/**
 * Folder type enumeration.
 */
 enum FolderType {
    OLDER_TYPE_UNKNOWN = 0,               // Unknown
    FOLDER_TYPE_ANY_FOLDER = 1,           // Any folder
    FOLDER_TYPE_VIEW_FOLDER = 2,          // View folder
    FOLDER_TYPE_PROPERTY_FOLDER = 3,      // Property (virtual) folder
    FOLDER_TYPE_TRADITIONAL_FOLDER = 4,   // Traditional folder
    FOLDER_TYPE_SEARCH_FOLDER = 5,        // Search folder (extended view folder)
    FOLDER_TYPE_EXTERNAL_VIEW_FOLDER = 6, // External view folder
}

/**
 * Struct for a single folder.
 */
interface IFolder {
  /**
   * The type of the folder (eg. eftPropertyFolder).
   */
  type: FolderType;
  /**
   * Additional folder type -specific information as a union.
   */
  data: string; // todo
}





