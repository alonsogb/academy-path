import { vi } from 'vitest';

export function getDataTestSelector(dataTest: string): string {
  return `[data-test="${dataTest}"]`
}

export function getMockStore() {
  return {
    state: {},
    commit: vi.fn(),
    dispatch: vi.fn()
  }
}
