/**
 * Shared type stubs and supporting interfaces used across the UIX definitions.
 */
interface IIconInformation {
  contentType: MFiles.IconContentType;
  content: string;
  extension?: string;
}

interface ObjVer {
  Type: number;
  ID: number;
  Version: number;
}

interface IObjID {
  Type: number;
  ID: number;
}

interface IVaultInfo {
  Name: string;
  GUID: string;
  AuthType?: string;
}

interface IVault {
  Name: string;
  GUID: string;
  URL?: string;


  VaultExtensionMethodsOperations: {
    /**
     * Is the specified vault extension method available.
     * @param params - The parameters object
     * @param params.method_identifier - The method identifier
     * @returns A promise that resolves to an object containing:
     *   - exists: Information about the extension method existence
     *   - is_active: Information about the state of the extension method (active/not active)
     */
    IsExtensionMethodAvailable(params: { method_identifier: string }): Promise<{ exists: boolean; is_active: boolean }>

    /**
     * Runs the specified vault extension method. Prefer this method over 'ExecuteExtensionMethod' and 'ExecuteExtensionMethodEx' methods.
     * @param params - The parameters object
     * @param params.application_id - The guid of the target application. Set all-zero guid if the extension method is not bound to an application but VBScript event handler
     * @param params.extension - The identifier of the vault extension implementing the extension method. Set empty string if the extension method is not bound to an application but VBScript event handler
     * @param params.instance - The identifier of the vault extension instance that implements the extension method. Set empty string if the extension method is not bound to an application but VBScript event handler
     * @param params.method_name - The method identifier. With application this is the extension method name. With VBScript event handlers this is the event handler name of 'VaultExtensionMethod' handler that receives the call
     * @param params.input - The method input as a clear text. Use empty string if compressed input field is used instead
     * @param params.compressed_input - The method input as compressed data (utf8 text as zlib-compressed byte array). Use empty data if the clear-text input is set
     * @returns A promise that resolves to an object containing:
     *   - output: The method output as a clear text. Empty string if compressed output field is used instead
     *   - compressed_output: The method input as compressed data (utf8 text as zlib-compressed byte array). Empty data if the clear-text output was used
     */
    RunExtensionMethod(params: {
      application_id: string;
      extension: string;
      instance: string;
      method_name: string;
      input: string;
      compressed_input: Uint8Array
    }): Promise<{ output: string; compressed_output: Uint8Array }>
  }
}

interface DialogUIParams {
  Title?: string;
  Width?: number;
  Height?: number;
  Modal?: boolean;
  ShowCloseButton?: boolean;
  Options?: Record<string, any>;
}

interface IObjectVersionEx extends ObjVer {
  DisplayName?: string;
  CreatedUtc?: string;
  LastModifiedUtc?: string;
  Size?: number;
}

interface IView {
  ID: number;
  Name: string;
  Icon?: string;
  Description?: string;
}

interface ShowMessageReturnValue {
  Button: string;
  CheckboxChecked?: boolean;
}

interface ShowMessageParams {
  Message: string;
  Title?: string;
  Buttons?: string;
  CheckboxText?: string;
  CheckboxChecked?: boolean;
  Icon?: string;
  Modal?: boolean;
}

interface ObjectWindowResult {
  Result: MFiles.ObjectWindowResultCode;
  ObjVer?: ObjVer;
}

interface ObjectCreationInfo {
  ObjectTypeID: number;
  PropertyValues?: PropertyValue[];
}

interface PropertyValue {
  PropertyDef: number;
  Value: any;
  IsLookup?: boolean;
}

interface AccessControlList {
  Entries?: any[];
}

interface IFolder {
  FolderID: number;
  Name: string;
  Path?: string;
}

interface IObjectFile {
  FileID: number;
  Name: string;
  Size: number;
  Extension: string;
}

interface NonSensitiveSessionData {
  SessionID?: string;
  UserName?: string;
  UserID?: number;
  VaultName?: string;
}

interface MFError {
  Code: number;
  Message: string;
  StackTrace?: string;
}