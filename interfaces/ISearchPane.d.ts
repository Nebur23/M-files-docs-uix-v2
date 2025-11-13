/** Callback map for `ISearchPaneEvents` */
interface ISearchPaneEventCallbackMap {
  [MFiles.Event.Started]: () => void;
  [MFiles.Event.Stop]: () => void;
}

/** Event registration for search pane events. */
interface ISearchPaneEvents {
  Register<E extends MFiles.Event.Started | MFiles.Event.Stop>(event: E, callback: ISearchPaneEventCallbackMap[E]): Promise<number>;
  Unregister(sinkHandle: number): Promise<boolean>;
}

/**
 * ISearchPane manages the search UI pane.
 */
interface ISearchPane {
  Available: boolean;
  Events: ISearchPaneEvents;
  SearchWithinViewOptionVisible: boolean;

  GetOptions(section?: string): Promise<{ options?: any; more?: boolean; controlDisabled?: boolean; controlExpanded?: boolean; useFullList?: boolean; items?: any }>;
  GetSearchCriteria(): Promise<any>;
  IsSearchView(): Promise<boolean>;
  SetOptionState(optionName: string, state: boolean): Promise<void>;
  SetSearchCriteria(criteria: any): Promise<void>;
}