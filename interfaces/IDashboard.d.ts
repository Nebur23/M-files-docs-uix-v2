/** Callback map for `IDashboardEvents` */
interface IDashboardEventCallbackMap {
  [MFiles.Event.Started]: () => void;
  [MFiles.Event.Stop]: () => void;
}

/** Event registration for dashboard events. */
interface IDashboardEvents {
  Register<E extends MFiles.Event.Started | MFiles.Event.Stop>(event: E, callback: IDashboardEventCallbackMap[E]): Promise<number>;
  Unregister(sinkHandle: number): Promise<boolean>;
}

/**
 * IDashboard represents a custom dashboard UI component that can be embedded or shown as a popup.
 */
interface IDashboard {
  Events: IDashboardEvents;
  ShellFrame: IShellFrame;
  Window: IWindow;

  GetContent(): Promise<string>;
  SetContent(content: string): Promise<void>;
  Show(): Promise<void>;
  Hide(): Promise<void>;
  Refresh(): Promise<void>;
}

/**
 * IDashboard represents an active dashboard instance (panel or popup).
 */
interface IDashboard {
  /** Dashboard identifier */
  ID: string;

  /** If dashboard is shown as popup window */
  IsPopupDashboard?: boolean;

  /** ShellFrame that owns this dashboard instance */
  ShellFrame: IShellFrame;

  /** Reference to the outer IWindow when shown as popup */
  Window?: IWindow | null;

  /** Events for dashboard lifecycle and custom-data changes */
  Events: IDashboardEvents;

  /**
   * Set or update the dashboard HTML content (or URL).
   * @param content HTML string or URL
   */
  SetContent(content: string): Promise<void>;

  /**
   * Show the dashboard (if hidden).
   */
  Show(): Promise<void>;

  /**
   * Hide the dashboard (if visible).
   */
  Hide(): Promise<void>;

  /**
   * Show a popup dashboard (returns a dashboard instance).
   * @param dashboardID - ID of dashboard to show
   * @param data - custom data to pass
   * @param titleOrOptions - optional title or DialogUIParams
   */
  ShowPopupDashboard(dashboardID: string, data?: any, titleOrOptions?: string | DialogUIParams): Promise<IDashboard>;

  /**
   * Display a standard M-Files message dialog.
   */
  ShowMessage(message: string | ShowMessageParams): Promise<ShowMessageReturnValue>;

  /**
   * Update dashboard custom data and broadcast CustomDataChanged.
   */
  UpdateCustomData(customData: any): Promise<void>;

  /**
   * Wait for the dashboard to close (useful for popup dashboards).
   */
  WaitForClose(): Promise<any>;
}