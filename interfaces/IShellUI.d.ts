/** Callback map for `IShellUIEvents` */
interface IShellUIEventCallbackMap {
  [MFiles.Event.Started]: () => void;
  [MFiles.Event.Stop]: () => void;
  [MFiles.Event.NewShellFrame]: (shellFrame: IShellFrame) => void;
  [MFiles.Event.NewNormalShellFrame]: (shellFrame: IShellFrame) => void;
  [MFiles.Event.CrossApplicationNotification]: (appGUID: string | null, msgId: string, data?: any) => void;
}

/** Event registration for shell UI events. */
interface IShellUIEvents {
  Register<E extends MFiles.Event.Started | MFiles.Event.Stop | MFiles.Event.NewShellFrame | MFiles.Event.NewNormalShellFrame | MFiles.Event.CrossApplicationNotification>(event: E, callback: IShellUIEventCallbackMap[E]): Promise<number>;
  Unregister(sinkHandle: number): Promise<boolean>;
}

/**
 * IShellUI corresponds to the top-level window (shell UI) and outlives individual frames.
 */
interface IShellUI {
  Events: IShellUIEvents;
  Vault: IVault;

  BroadcastMessage(appGUID: string | null, msgId: string, data?: any): Promise<void>;
  GetFileTypeIconURL(extensionOrFilename: string): Promise<string>;
  GetObjectTypeIconURL(objectType: number): Promise<string>;
  GetValueListItemIconURL(valueList: number, valueListItemID: number | string): Promise<string>;
  NotifyApplication(appGUID: string | null, msgId: string, data?: any): Promise<void>;
  ShowMessage(message: string | ShowMessageParams): Promise<ShowMessageReturnValue>;
  ShowPopupDashboard(dashboardID: string, data: any, titleOrOptions?: string | DialogUIParams): Promise<IDashboard>;
}