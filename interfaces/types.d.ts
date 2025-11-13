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