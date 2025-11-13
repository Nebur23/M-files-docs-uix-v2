/** Callback map for `IShellPaneContainerEvents` */
interface IShellPaneContainerEventCallbackMap {
  [MFiles.Event.Started]: () => void;
  [MFiles.Event.Stop]: () => void;
}

/** Event registration for shell pane container events. */
interface IShellPaneContainerEvents {
  Register<E extends MFiles.Event.Started | MFiles.Event.Stop>(event: E, callback: IShellPaneContainerEventCallbackMap[E]): Promise<number>;
  Unregister(sinkHandle: number): Promise<boolean>;
}

/**
 * IShellPaneContainer represents a pane area (left/right/bottom) capable of holding tabs.
 */
interface IShellPaneContainer {
  Available: boolean;
  Events: IShellPaneContainerEvents;
  Minimized: boolean;
  ShellFrame: IShellFrame;
  Size: number;
  Visible: boolean;

  AddTab(tabId: string, tabTitle: string, insertBeforeTabId: string, icon: string): Promise<IShellPaneTab | null>;
  GetSelectedTabs(): Promise<IShellPaneTab[]>;
  GetTab(tabId: string): Promise<IShellPaneTab | null>;
}