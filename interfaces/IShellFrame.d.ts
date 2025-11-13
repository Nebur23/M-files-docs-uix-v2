/** Callback map for `IShellFrameEvents` */
interface IShellFrameEventCallbackMap {
  [MFiles.Event.Started]: () => void;
  [MFiles.Event.Stop]: () => void;
  [MFiles.Event.ViewLocationChanged]: () => void;
  [MFiles.Event.ViewLocationChangedAsync]: () => void;
  [MFiles.Event.NewCommands]: () => void;
  [MFiles.Event.NewRightPane]: () => void;
  [MFiles.Event.NewShellListing]: (newShellListing: IShellListing) => void;
  [MFiles.Event.SelectionChanged]: () => void;
  [MFiles.Event.SelectNextObject]: () => void;
  [MFiles.Event.SelectPreviousObject]: () => void;
  [MFiles.Event.SelectNextFolder]: () => void;
  [MFiles.Event.SelectPreviousFolder]: () => void;
  [MFiles.Event.ListingDeactivated]: (shellListing: IShellListing | null) => void;
  [MFiles.Event.ListingActivated]: (shellListing: IShellListing | null) => void;
  [MFiles.Event.ContentChanged]: (shellItems: IShellItems) => void;
  [MFiles.Event.ListItemAdded]: (objectVersion: IObjectVersionEx) => void;
  [MFiles.Event.ListItemRemoved]: (listItem: IObjectVersionEx | IObjectVersionEx[]) => void;
  [MFiles.Event.ListItemModified]: (oldServerObjVer: ObjVer[], newObjVer: ObjVer[]) => void;
  [MFiles.Event.SelectedItemsChanged]: (shellItems: IShellItems) => void;
}

/** Event registration for shell frame events. */
interface IShellFrameEvents {
  Register<E extends MFiles.Event.Started | MFiles.Event.Stop | MFiles.Event.ViewLocationChanged | MFiles.Event.ViewLocationChangedAsync | MFiles.Event.NewCommands | MFiles.Event.NewRightPane | MFiles.Event.NewShellListing | MFiles.Event.SelectionChanged | MFiles.Event.SelectNextObject | MFiles.Event.SelectPreviousObject | MFiles.Event.SelectNextFolder | MFiles.Event.SelectPreviousFolder | MFiles.Event.ListingDeactivated | MFiles.Event.ListingActivated | MFiles.Event.ContentChanged | MFiles.Event.ListItemAdded | MFiles.Event.ListItemRemoved | MFiles.Event.ListItemModified | MFiles.Event.SelectedItemsChanged>(event: E, callback: IShellFrameEventCallbackMap[E]): Promise<number>;
  Unregister(sinkHandle: number): Promise<boolean>;
}

/**
 * IShellFrame models a single shell (listing) instance and provides access to its panes, listing and commands.
 */
interface IShellFrame {
  ActiveListing: IShellListing;
  Commands: ICommands;
  CurrentFolder: Array<IFolder>;
  CurrentPath: string;
  CurrentUrl: string;
  Events: IShellFrameEvents;
  LeftPane: IShellPaneContainer;
  Listing: IShellListing;
  ParentFolder: Array<IFolder>;
  RightPane: IShellPaneContainer;
  SearchPane: ISearchPane;
  ShellUI: IShellUI;

  GetSandboxAttributes(moduleName?: string): Promise<string | undefined>;
  GetViewsById(): Promise<Map<number, IView>>;
  IsFolderLocation(): Promise<boolean>;
  IsObjectLocation(): Promise<boolean>;
  NavigateToFolder(folderDefs: Array<IFolder>): Promise<void>;
  NavigateToObject(obj: ObjVer | IObjID): Promise<void>;
  NavigateToParent(): Promise<void>;
  ShowDashboard(dashboardID: string, data: any): Promise<IDashboard>;
  ShowDefaultContent(): Promise<void>;
  ShowMessage(message: string | ShowMessageParams): Promise<ShowMessageReturnValue>;
  ShowPopupDashboard(dashboardID: string, data: any, titleOrOptions?: string | DialogUIParams): Promise<IDashboard>;
}