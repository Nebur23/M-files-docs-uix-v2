/**
 * ICommands interface and related types.
 * 
 * The Commands API includes functionality for creating Custom Commands and menus.
 * Custom commands can be executed by users through menus, toolbars, and other UI elements.
 */

/**
 * ICommandsEvent callback map for built-in and custom command events.
 */
interface ICommandsEventCallbackMap {
  [MFiles.Event.CustomCommand]: (commandId: number, data?: any) => void;
  [MFiles.Event.BuiltinCommand]: (commandId: number, params?: any) => void;
}

/** Event registration for command events. */
interface ICommandsEvents {
  Register<E extends MFiles.Event.CustomCommand | MFiles.Event.BuiltinCommand>(event: E, callback: ICommandsEventCallbackMap[E]): Promise<number>;
  Unregister(sinkHandle: number): Promise<boolean>;
}

/**
 * ICommands interface provides methods for managing user-defined custom commands and menus.
 */
interface ICommands {
  Events: ICommandsEvents;

  /**
   * Adds existing custom command to the specified detailed menu location.
   * @param customCommand - The command identifier (returned from CreateCustomCommand).
   * @param location - Detailed menu location where to add the existing custom command.
   * @param orderPriority - The order indication for the command (smaller values shown first).
   * @returns Menu item id.
   */
  AddCustomCommandToMenu(customCommand: number, location: MFiles.MenuLocation, orderPriority: number): Promise<number>;

  /**
   * Creates a custom command that can be added to menus or executed directly.
   * @param name - The custom command's name.
   * @returns The command id of the created custom command.
   */
  CreateCustomCommand(name: string): Promise<number>;

  /**
   * Creates a new SubMenu item for an already created menu.
   * @param parentMenuItemId - ID of the parent menu item.
   * @param customCommand - Command id to execute when the menu item is selected.
   * @param orderPriority - Priority to assign to the new item (smaller values shown first).
   * @returns ID of the newly created menu item.
   */
  CreateSubMenuItem(parentMenuItemId: number, customCommand: number, orderPriority: number): Promise<number>;

  /**
   * Creates a new custom task bar group for custom commands.
   * NOTE: Experimental/stability warning - use with caution.
   */
  CreateTaskbarGroup(params?: any): Promise<number>;

  DeleteCustomCommand(commandId: number): Promise<void>;
  ExecuteCommand(commandId: number, params?: any): Promise<void>;
  GetCommandName(commandId: number): Promise<string>;
  GetCommandState(commandId: number, location: MFiles.CommandLocation, includeBuiltInState: boolean, includeScriptSpecifiedState: boolean): Promise<MFiles.CommandState>;
  GetMenuIdOfBuiltInCommand(builtInCommandId: number, location: MFiles.CommandLocation): Promise<number>;
  RemoveCustomCommandFromMenu(commandId: number, location: MFiles.MenuLocation): Promise<void>;
  RemoveMenuItem(menuItemId: number): Promise<void>;
  RemoveTaskbarGroup(groupId: number): Promise<void>;
  SetCommandState(commandId: number, state: MFiles.CommandState, location?: MFiles.CommandLocation): Promise<void>;
  SetIcon(commandId: number, icon: IIconInformation): Promise<void>;
  SetMenuItemState(menuItemId: number, state: MFiles.CommandState): Promise<void>;
  SetTaskbarGroupIcon(groupId: number, icon: IIconInformation): Promise<void>;
}