// Browser shim for node:async_hooks (GitHub Pages / Vite client build)
// Enough to satisfy imports like: import { AsyncLocalStorage } from "node:async_hooks"

export class AsyncLocalStorage<T = unknown> {
  run(_store: T, callback: (...args: any[]) => any, ...args: any[]) {
    return callback(...args);
  }
  getStore(): T | undefined {
    return undefined;
  }
  enterWith(_store: T) {}
  disable() {}
}
