
import type { NormalizePath } from '../types';

const normalizePath: NormalizePath = function normalizePath(filename: string) {
  return filename.replaceAll('\\', '/')
};

export { normalizePath as default };
