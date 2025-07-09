import { renderHook } from '@testing-library/react';
import { describe, it, expect, afterEach, vi } from 'vitest';
import { useIsMobile } from './use-mobile';

const setWindowWidth = (width: number) => {
  Object.defineProperty(window, 'innerWidth', { writable: true, configurable: true, value: width });
};

const createMatchMedia = (width: number) =>
  vi.fn().mockImplementation((query: string) => ({
    matches: width < 768,
    media: query,
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
  }));

describe('useIsMobile', () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('returns true when width is below breakpoint', () => {
    setWindowWidth(500);
    window.matchMedia = createMatchMedia(500) as unknown as typeof window.matchMedia;
    const { result } = renderHook(() => useIsMobile());
    expect(result.current).toBe(true);
  });

  it('returns false when width is above breakpoint', () => {
    setWindowWidth(800);
    window.matchMedia = createMatchMedia(800) as unknown as typeof window.matchMedia;
    const { result } = renderHook(() => useIsMobile());
    expect(result.current).toBe(false);
  });
});
