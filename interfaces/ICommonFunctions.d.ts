/**
 * ICommonFunctions interface.
 * 
 * Provides a set of common utility functions and properties for M-Files UIX applications.
 * This interface is bound to the global `MFiles` object, which is available throughout
 * the UIX application lifecycle.
 * 
 * The MFiles global object exposes these functions and properties, for example:
 * - MFiles.AnonymousUser
 * - MFiles.DeleteFromWebStorage(...)
 * - MFiles.ShowToast(...)
 * 
 * Note: The MFiles namespace also contains enums and types (e.g. MFiles.Event).
 * This declare var MFiles provides the runtime object typing and merges with
 * the namespace declarations so both type and runtime information are available.
 */
interface ICommonFunctions {
  /**
   * Indicates whether the current user is an anonymous user.
   * 
   * @type {boolean}
   */
  AnonymousUser: boolean;

  /**
   * Gets the current application platform (e.g., "web", "desktop").
   * 
   * @type {string}
   */
  CurrentApplicationPlatform: string;

  /**
   * Deletes a value from the web storage.
   * 
   * Web storage provides persistent client-side storage for the UIX application.
   * 
   * @param key - The key of the storage item to delete.
   * @returns A promise that resolves when the item has been deleted.
   */
  DeleteFromWebStorage(key: string): Promise<void>;

  /**
   * Gets the accent color of the M-Files application.
   * 
   * The accent color is typically used for highlighting and emphasis in the UI.
   * 
   * @returns A promise that resolves to the accent color as a hex color string (e.g., "#0078D4").
   */
  GetAccentColor(): Promise<string>;

  /**
   * Gets the client language code (e.g., "en-US").
   * 
   * This represents the language setting of the M-Files client.
   * 
   * @returns A promise that resolves to the language code.
   */
  GetClientLanguage(): Promise<string>;

  /**
   * Gets the client locale code (e.g., "en-US").
   * 
   * This represents the locale/regional setting of the M-Files client.
   * 
   * @returns A promise that resolves to the locale code.
   */
  GetClientLocale(): Promise<string>;

  /**
   * Gets non-sensitive session information.
   * 
   * Session data includes information about the current user session without exposing
   * sensitive credentials.
   * 
   * @returns A promise that resolves to the session data object.
   */
  GetSessionInfo(): Promise<NonSensitiveSessionData>;

  /**
   * Gets the UTC offset in minutes for the client's timezone.
   * 
   * @returns A promise that resolves to the UTC offset in minutes.
   */
  GetUTCOffset(): Promise<number>;

  /**
   * Gets information about the connected vault.
   * 
   * @returns A promise that resolves to vault information including name, GUID, etc.
   */
  GetVaultInfo(): Promise<IVaultInfo>;

  /**
   * Gets the web link to an object or file.
   * 
   * This generates a URL that can be used to access the object in the M-Files web interface.
   * 
   * @param objId - The object identifier containing type and ID.
   * @param objGUID - The GUID of the object.
   * @param fileGUID - Optional. The GUID of a specific file within the object.
   * @param fileID - Optional. The file ID of a specific file within the object.
   * @param isLatestVersion - Optional. Whether to link to the latest version (default: true).
   * @param version - Optional. Specific version number to link to.
   * @returns A promise that resolves to the web link URL.
   */
  GetWebLink(
    objId: IObjID,
    objGUID: string,
    fileGUID?: string | undefined,
    fileID?: string | undefined,
    isLatestVersion?: boolean,
    version?: number
  ): Promise<string>;

  /**
   * Opens an external web link in the user's default browser.
   * 
   * @param webUrl - The URL to open.
   * @returns A promise that resolves when the link has been opened.
   */
  OpenExternalWebLink(webUrl: string): Promise<void>;

  /**
   * Reads a value from the web storage.
   * 
   * @param key - The key of the storage item to read.
   * @returns A promise that resolves to the stored value, or undefined if not found.
   */
  ReadFromWebStorage(key: string): Promise<string>;

  /**
   * Reports an exception to the M-Files server for logging and diagnostics.
   * 
   * This is useful for logging errors and exceptions that occur in UIX applications.
   * 
   * @param exception - The exception to report (either a string message or MFError object).
   * @returns A promise that resolves to an error code/ID.
   */
  ReportException(exception: string | MFError): Promise<number>;

  /**
   * Shows an object edit window for modifying an existing object.
   * 
   * This opens the standard M-Files object editing dialog.
   * 
   * @param objVer - The object version to edit.
   * @param options - Optional. Dialog UI customization options.
   * @returns A promise that resolves to the result of the edit operation.
   */
  ShowEditObjectWindow(
    objVer: ObjVer,
    options: DialogUIParams
  ): Promise<ObjectWindowResult>;

  /**
   * Shows an object creation window for creating a new object.
   * 
   * This opens the standard M-Files object creation dialog with optional pre-filled values.
   * 
   * @param objectType - The object type ID for the new object.
   * @param objectCreationInfo - Information about how to create the object.
   * @param prefillPropertyValues - Optional. Property values to pre-fill in the dialog.
   * @param accessControlList - Optional. Access control settings for the new object.
   * @param options - Optional. Dialog UI customization options.
   * @returns A promise that resolves to the result of the creation operation.
   */
  ShowNewObjectWindow(
    objectType: number,
    objectCreationInfo: ObjectCreationInfo,
    prefillPropertyValues: Array<PropertyValue>,
    accessControlList: AccessControlList,
    options: DialogUIParams
  ): Promise<ObjectWindowResult>;

  /**
   * Shows a toast notification message to the user.
   * 
   * Toast notifications are temporary, non-intrusive messages typically displayed at the bottom of the screen.
   * 
   * @param title - The title of the toast notification.
   * @param message - The message content of the toast.
   * @param type - The type of toast (Info, Success, Warning, or Error).
   * @returns A promise that resolves when the toast has been displayed.
   * 
   * @example
   * ```typescript
   * await MFiles.ShowToast(
   *   "Operation Complete",
   *   "The document has been successfully saved.",
   *   MFiles.ToastType.ToastType_Success
   * );
   * ```
   */
  ShowToast(
    title: string,
    message: string,
    type: MFiles.ToastType
  ): Promise<void>;

  /**
   * Writes a value to the web storage.
   * 
   * Web storage provides persistent client-side storage for the UIX application.
   * 
   * @param key - The key to store the value under.
   * @param value - The value to store.
   * @returns A promise that resolves to true if the write was successful, false otherwise.
   */
  WriteToWebStorage(key: string, value: string): Promise<boolean>;
}

/**
 * Global `MFiles` runtime object that exposes the common functions and properties
 * defined in `ICommonFunctions`.
 * 
 * This provides the runtime typing for the global MFiles object available throughout
 * the UIX application. The MFiles namespace contains enums and types (e.g. MFiles.Event),
 * while this declare var provides the runtime object typing. Together they merge so both
 * type and runtime information are available.
 * 
 * @example
 * ```typescript
 * // Access properties
 * const isAnon = MFiles.AnonymousUser;
 * const platform = MFiles.CurrentApplicationPlatform;
 * 
 * // Call methods
 * await MFiles.ShowToast("Title", "Message", MFiles.ToastType.ToastType_Info);
 * const lang = await MFiles.GetClientLanguage();
 * ```
 */
declare var MFiles: ICommonFunctions;