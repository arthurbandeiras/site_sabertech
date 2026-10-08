/// <reference types="vite/client" />

declare interface ImportMetaEnv {
  readonly VITE_HERO_YOUTUBE_ID?: string;
}

declare interface ImportMeta {
  readonly env: ImportMetaEnv;
}
