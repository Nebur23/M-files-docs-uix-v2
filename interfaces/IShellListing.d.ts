/** Callback map for `IShellListingEvents` */
interface IShellListingEventCallbackMap {
  [MFiles.Event.Started]: () => void;
  [MFiles.Event.Stop]: () => void;
  [MFiles.Event.SelectionChanged]: () => void;
  [MFiles.Event.SelectNextObject]: () => void;
  [MFiles.Event.SelectPreviousObject]: () => void;
  [MFiles.Event.SelectNextFolder]: () => void;
  [MFiles.Event.SelectPreviousFolder]: () => void;
  [MFiles.Event.ListingDeactivated]: (listing: IShellListing | null) => void;
  [MFiles.Event.ListingActivated]: (listing: IShellListing | null) => void;
  [MFiles.Event.ContentChanged]: (shellItems: IShellItems) => void;
  [MFiles.Event.ListItemAdded]: (objectVersion: IObjectVersionEx) => void;
  [MFiles.Event.ListItemRemoved]: (listItem: IObjectVersionEx | IObjectVersionEx[]) => void;
  [MFiles.Event.ListItemModified]: (oldObjVers: ObjVer[], newObjVers: ObjVer[]) => void;
  [MFiles.Event.SelectedItemsChanged]: (shellItems: IShellItems) => void;
}

/** Event registration for shell listing events. */
interface IShellListingEvents {
  Register<E extends MFiles.Event.Started | MFiles.Event.Stop | MFiles.Event.SelectionChanged | MFiles.Event.SelectNextObject | MFiles.Event.SelectPreviousObject | MFiles.Event.SelectNextFolder | MFiles.Event.SelectPreviousFolder | MFiles.Event.ListingDeactivated | MFiles.Event.ListingActivated | MFiles.Event.ContentChanged | MFiles.Event.ListItemAdded | MFiles.Event.ListItemRemoved | MFiles.Event.ListItemModified | MFiles.Event.SelectedItemsChanged>(event: E, callback: IShellListingEventCallbackMap[E]): Promise<number>;
  Unregister(sinkHandle: number): Promise<boolean>;
}

/**
 * IShellListing exposes operations for manipulating the listing view and selection.
 */
interface IShellListing {
  CurrentPath: string;
  CurrentSelection: IShellItems;
  Events: IShellListingEvents;
  IsActive: boolean;
  Items: IShellItems;

  ActivateListing(): Promise<void>;
  ActivateSelected(): Promise<void>;
  AddListingItem(objectVersion: IObjectVersionEx): Promise<void>;
  AddObjectFile(params: any): Promise<void>;
  RefreshListing(): Promise<void>;
  RefreshObject(objVer: ObjVer): Promise<boolean | void>;
  RemoveListingItem(listItem: any): Promise<void>;
  ReplaceFile(params: any): Promise<void>;
  SelectFolder(folder: IFolder): Promise<void>;
  SelectNextFolder(): Promise<void>;
  SelectNextObject(): Promise<void>;
  SelectNextObjectFile(allowMoveToNextObject: boolean): Promise<void>;
  SelectObjectFile(objFile: IObjectFile): Promise<void>;
  SelectObjectOrObjectFileVersion(objOrFileVer: ObjVer | IObjectFile): Promise<void>;
  SelectObjectVersion(objVer: ObjVer): Promise<void>;
  SelectPrevFolder(): Promise<void>;
  SelectPrevObject(): Promise<void>;
  SelectPrevObjectFile(): Promise<void>;
  SetFolderOrObjectVersionSelectionStates(objVersOrFolders: Array<ObjVer | IFolder>, select: boolean): Promise<void>;
  SetFolderSelectionStates(folderVers: Array<IFolder>, select: boolean): Promise<void>;
  SetObjectOrObjectFileVersionSelectionStates(objOrFileVers: Array<ObjVer | IObjectFile>, select: boolean): Promise<void>;
  SetObjectVersionSelectionStates(objVers: Array<ObjVer>, select: boolean): Promise<void>;
  SetVirtualSelection(items: any[]): Promise<void>;
  UnselectAll(): Promise<void>;
  UpdateListingItem(oldObjVers: Array<ObjVer>, newObjVers: Array<ObjVer>, triggerCurrentSelection?: boolean): Promise<boolean>;
}