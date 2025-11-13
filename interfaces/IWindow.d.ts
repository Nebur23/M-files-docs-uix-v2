/** Callback map for `IWindowEvents` */
interface IWindowEventCallbackMap {
  [MFiles.Event.CloseWindow]: (win?: IWindow) => void;
}

/** Event registration for window events. */
interface IWindowEvents {
  Register<E extends MFiles.Event.CloseWindow>(event: E, callback: IWindowEventCallbackMap[E]): Promise<number>;
  Unregister(sinkHandle: number): Promise<boolean>;
}

/**
 * IWindow represents an outer window object for popup dashboards.
 */
interface IWindow {
  Events: IWindowEvents;

  Close(): Promise<void>;
  ResizeToDefaultSize(): Promise<void>;
  SetCloseIconVisibility(visible: boolean): Promise<void>;
  SetDefaultSize(width: number, height: number, resizeToDefault: boolean): Promise<void>;
  SetSize(width: number, height: number): Promise<void>;
  SetTitle(title: string): Promise<void>;
}