interface IShellItems {
  Count: number;
  Folders: Array<IFolder>;
  ObjectFiles: Array<IObjectFile>;
  ObjectVersions: Array<IObjectVersionEx>;

  GetFoldersCount(): Promise<number>;
  GetObjectVersionsAndProperties(): Promise<any[]>;
  GetObjectVersionsCount(): Promise<number>;
}