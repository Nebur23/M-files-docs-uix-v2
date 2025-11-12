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

  /**
   * Detailed menu location where to add the existing custom *command.
  *Possible locations are enumerated.

 * NOTE: Stability is experimental. Non-backward compatible changes or removal
 * may occur in any future release. Use of this feature is not recommended
 * for production environments.
 */
 enum MenuLocation {
    /**
     * TopPane Menu, typically used for the UI Extension applications.
     */
    MenuLocation_TopPaneMenu = 47,

    /**
     * Menu location for the Activity view Context menu group 1.
     */
    MenuLocation_ActivityContextMenu_1 = 48,

    /**
     * Menu location for the Activity view Context menu group 2.
     */
    MenuLocation_ActivityContextMenu_2 = 49,

    /**
     * Menu location for the Activity view Context menu group 3.
     */
    MenuLocation_ActivityContextMenu_3 = 50,

    /**
     * Menu location for the context menu position for the open commands.
     */
    MenuLocation_ContextMenu_Open = 51,

    /**
     * Menu location for the context menu position for the checkout commands.
     */
    MenuLocation_ContextMenu_Checkout = 52,

    /**
     * Menu location for the context menu position for the share commands.
     */
    MenuLocation_ContextMenu_Share = 53,

    /**
     * Menu location for the position of object operations in the context menu.
     */
    MenuLocation_ContextMenu_ObjectOperations = 26,

    /**
     * Menu location for the context menu position for document conversions.
     */
    MenuLocation_ContextMenu_DocumentConversions = 41,

    /**
     * Menu location for the context menu position for the workflow action commands.
     */
    MenuLocation_ContextMenu_WorkflowActions = 54,

    /**
     * Menu location for the context menu position for the organize commands.
     */
    MenuLocation_ContextMenu_Organize = 55,

    /**
     * Menu location for the context menu position for the version control commands.
     */
    MenuLocation_ContextMenu_VersionControl = 56,

    /**
     * Menu location for the context menu position for the create commands.
     */
    MenuLocation_ContextMenu_Create = 57,

    /**
     * Menu location for the context menu position for the view options commands.
     */
    MenuLocation_ContextMenu_ViewOptions = 58,

    /**
     * Menu location for the context menu position for the grouping commands.
     */
    MenuLocation_ContextMenu_Group = 59,

    /**
     * Menu location for the context menu position for the display options commands.
     */
    MenuLocation_ContextMenu_DisplayOptions = 60,

    /**
     * Menu location for the context menu position for Edit commands.
     */
    MenuLocation_ContextMenu_Edit = 37,

    /**
     * Menu location for the bottom of the context menu.
     */
    MenuLocation_ContextMenu_Bottom = 43,

    /**
     * Menu location for the context menu position for more commands.
     */
    MenuLocation_ContextMenu_More = 99,

    /**
     * Menu location for the first command group in the task bar.
     *
     * NOTE: Stability is experimental. Non-backward compatible changes or removal may occur
     * in any future release. Use of this feature is not recommended for production environments.
     */
    MenuLocation_TaskBar_First = 200,

    /**
     * Menu location for the "Main Actions" command group in the task bar.
     *
     * NOTE: Stability is experimental. Non-backward compatible changes or removal may occur
     * in any future release. Use of this feature is not recommended for production environments.
     */
    MenuLocation_TaskBar_MainActions = 210,

    /**
     * Menu location for the "Assignments" command group in the task bar.
     *
     * NOTE: Stability is experimental. Non-backward compatible changes or removal may occur
     * in any future release. Use of this feature is not recommended for production environments.
     */
    MenuLocation_TaskBar_Assignments = 220,

    /**
     * Menu location for the "Document Collections" command group in the task bar.
     *
     * NOTE: Stability is experimental. Non-backward compatible changes or removal may occur
     * in any future release. Use of this feature is not recommended for production environments.
     */
    MenuLocation_TaskBar_DocumentCollections = 230,

    /**
     * Menu location for the "Check In" command group in the task bar.
     *
     * NOTE: Stability is experimental. Non-backward compatible changes or removal may occur
     * in any future release. Use of this feature is not recommended for production environments.
     */
    MenuLocation_TaskBar_CheckIn = 240,

    /**
     * Menu location for the "Workflow States" command group in the task bar.
     *
     * NOTE: Stability is experimental. Non-backward compatible changes or removal may occur
     * in any future release. Use of this feature is not recommended for production environments.
     */
    MenuLocation_TaskBar_WorkflowStates = 250,

    /**
     * Menu location for the last command group in the task bar.
     *
     * NOTE: Stability is experimental. Non-backward compatible changes or removal may occur
     * in any future release. Use of this feature is not recommended for production environments.
     */
    MenuLocation_TaskBar_Last = 399,
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
   * Ths ICommandEvents interface provides methods to register and unregister event handlers for custom commands:
   */
  interface ICommandsEvents {
    /**
     * Registers an event handler for the specified event and returns the event handler ID.
     * @param event - The event type to register for
     * @param handler - The function to call when the event fires
     */
    Register(event: "CustomCommand" | "BuiltinCommand", handler: Function): number;

    /**
     * Unregisters the event handler with the specified ID.
     * @param eventHandlerId - The ID returned from Register()
     */
    Unregister(eventHandlerId: number): void;
  }

  /**
   * Command management system
   * The Commands API includes functionality for creating Custom Commands and menus.
   */
  interface Commands {

      /**
     * Properties
     */
    
    Events : ICommandsEvents

    /**
     * Methods
     */

      /**
     * Adds existing custom command to the specified context menu location.
     * 
     * The AddCustomCommandToMenu function is a part of the M-Files UI Extension framework and is used to include 
     * a custom command in a specific location within the M-Files user interface menu. It allows developers to 
     * define the position and priority of the custom command in the menu structure. This function typically takes 
     * parameters such as the ID of the custom command, the menu location where the command should appear, and a 
     * priority value to determine its order within the menu. This enables customization of the user interface by 
     * seamlessly integrating custom functionality into the M-Files application's menu system.
     * 
     * **Note:** The Command to be added must be first created using CreateCustomCommand method.
     * 
     * 
     *@param customCommand - The command identifier. Use CreateCustomCommand method to create a command.
     *@param location - Detailed menu location where to add the existing custom command.
    Possible locations are enumerated.
    *@param orderPriority - The order indication for the command. Smallest priority goes top.
     * @returns Returns the Menu item ID.
     * 
     * @example
     * ```typescript
     * const menuItemId = await shellFrame.Commands.AddCustomCommandToMenu(    
     *     customCommandId, // ID of the custom command, created using CreateCustomCommand
     *     MFiles.MenuLocation.MenuLocation_TopPaneMenu, // MenuLocation using MFiles.MenuLocation enumeration
     *     1 // Order priority of the menuitem
     * );
     * ```
     */
    AddCustomCommandToMenu(customCommand:number, location: MenuLocation, orderPriority:number ) : Promise < number >

    /**
     * Creates a custom command that can be added to the application toolbar or to the contextmenu.
     * 
     * The CreateCustomCommand function is a functionality within the M-Files UI Extension framework designed for creating custom commands dynamically. This function enables developers to define and generate new custom commands programmatically. It accepts the name of the command as a parameter, and it returns a unique identifier (ID) associated with the newly created command. 
     * 
     * 
     * The created command ID can then be consumed for example by

      1. **AddCustomCommandToMenu** to create a new Menu item which executes the command
      2. **ExecuteCommand** to directly execute the command inside the application with optional command arguments
      3. **CreateSubMenuItem** to create submenu commands.

      You can control the visibility of the command in M-Files menus using **SetCommandState**.
     * 
     * @param name - The custom command's name.
     * @returns Returns the command id of the created custom command.
     * 
     /**
     * @example
     * ```typescript
     * // Create a new custom command using IShellFrame instance.
     * const commandId = await shellFrame.Commands.CreateCustomCommand(name);
     * ```
     */
    CreateCustomCommand(name: string): Promise<number>;

    /**
     * Creates a new SubMenu for already created Menu.
     * 
     *@param parentMenuItemId - ID of the Parent MenuItem.
     *@param customCommand - Command to execute when the MenuItem is selected..
      Possible locations are enumerated.
    *@param orderPriority - Priority to assign to the new item.
     * @returns ID of the newly created MenuItem.
     * 
     * @example
     * ```typescript
     * // shellFrame points here into the IShellFrame interface
     const result = await shellFrame.Commands.CreateSubMenuItem(
      parentMenuItemId,
      customCommand,
      orderPriority,
      );
     * ```
     */
    CreateSubMenuItem(parentMenuItemId:number, customCommand:number, orderPriority:number) : Promise <number >

    /**
     * Creates new custom task bar group for custom commands.

      **NOTE**: Stability is experimental. Non-backward compatible changes or removal may occur in any
      future release. Use of this feature is not recommended for production environments.

      NOTE: If multiple task bar groups are created for the same MenuLocation with the same
      orderPriority, their relative ordering is unspecified and may vary between runs, sessions or
      versions. Do not rely on a particular order for groups with equal priority — assign distinct
      orderPriority values to guarantee a deterministic ordering (lower values are shown first).
     */
    CreateTaskbarGroup() : void

    /**
     * Deletes a custom command. The command is automatically removed.
     */
    DeleteCustomCommand() : void

    /**
     * Executes a user command.
     */
    ExecuteCommand() : void

    /**
     * Resolves the name that has been associated with the given command id.
     */
    GetCommandName() : void

    /**
     * Gets the command state for builtin or custom command in specified location.
     */
    GetCommandState() : void

    /**
     * Gets the MenuItem ID of a built-in command by its command ID and location.
     */
    GetMenuIdOfBuiltInCommand() : void

    /**
     * Removes a custom command from the specified menu location.
     */
    RemoveCustomCommandFromMenu() : void

    /**
     * Removes menuitem from the menu.
     */
    RemoveMenuItem() : void

    /**
     * Removes custom task bar group from the task bar.

      **NOTE**: Stability is experimental. Non-backward compatible changes or removal may occur in any
      future release. Use of this feature is not recommended for production environments.
     */
    RemoveTaskbarGroup() : void

    /**
     * Sets the command's state to be hidden, visible, enabled or disabled. Calling
    this method may affect context menu, application toolbar, menus or all of them.
     */
    SetCommandState() : void

    /**
     * Sets the icon for a custom command.

    **NOTE**: Stability is experimental. Non-backward compatible changes or removal may occur in any
    future release. Use of this feature is not recommended for production environments.
     */
    SetIcon() : void

    /**
     * Sets the MenuItem state individually.
     */
    SetMenuItemState() : void

    /**
     * Sets the icon for a custom task bar group.

    **NOTE**: Stability is experimental. Non-backward compatible changes or removal may occur in any
    future release. Use of this feature is not recommended for production environments.
     */
    SetTaskbarGroupIcon() : void

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

    /** Command management for this shell frame*/
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






