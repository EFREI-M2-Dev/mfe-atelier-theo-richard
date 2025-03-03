
    export type RemoteKeys = 'mfe_header/header';
    type PackageType<T> = T extends 'mfe_header/header' ? typeof import('mfe_header/header') :any;