/** Callback map for `IShellPaneTabEvents` */
interface IShellPaneTabEventCallbackMap {
  [MFiles.Event.Started]: () => void;
  [MFiles.Event.Stop]: () => void;
}

/** Event registration for shell pane tab events. */
interface IShellPaneTabEvents {
  Register<E extends MFiles.Event.Started | MFiles.Event.Stop>(event: E, callback: IShellPaneTabEventCallbackMap[E]): Promise<number>;
  Unregister(sinkHandle: number): Promise<boolean>;
}

/**
 * IShellPaneTab represents an individual tab inside a shell pane container.
 */
interface IShellPaneTab {
  /** Unique tab id */
  TabId: string;

  /** Human readable title */
  Title: string;

  /** Whether tab is currently selected */
  Selected: boolean;

  /** Whether tab is a built-in tab (not removable) */
  IsBuiltIn: boolean;

  /** Whether tab is visible */
  Visible: boolean;

  /** Events for the tab */
  Events: IShellPaneTabEvents;

  /**
   * Select the tab.
   */
  Select(): Promise<void>;

  /**
   * Unselect the tab.
   */
  Unselect(): Promise<boolean>;

  /**
   * Remove the tab from the container (if not built-in).
   */
  Remove(): Promise<void>;

  /**
   * Show dashboard inside this tab.
   * @param dashboardID - id of the dashboard to show
   * @param data - dashboard data
   * @param titleOrOptions - optional title or DialogUIParams
   */
  ShowDashboard(dashboardID: string, data?: any, titleOrOptions?: string | DialogUIParams): Promise<IDashboard | null>;

  /**
   * Make the tab visible or hidden.
   */
  SetVisible(visible: boolean): Promise<void>;

  /**
   * Show an empty content area inside this tab.
   */
  ShowEmptyContent(): Promise<void>;
}