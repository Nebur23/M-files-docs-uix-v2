interface IEvents {
  Register(event: MFiles.Event.Started | MFiles.Event.Stop, callback: (...args: any[]) => void): Promise<number>;
  Unregister(sinkHandle: number): Promise<boolean>;
}