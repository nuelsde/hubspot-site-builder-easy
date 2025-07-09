import { describe, it, expect } from 'vitest'
import { cn } from './utils'

describe('cn', () => {
  it('merges simple class names', () => {
    expect(cn('a', 'b')).toBe('a b')
  })

  it('deduplicates conflicting Tailwind classes', () => {
    expect(cn('p-2', 'p-4')).toBe('p-4')
  })

  it('ignores falsy values', () => {
    expect(cn('a', null, undefined, false, '', 'b')).toBe('a b')
  })

  it('supports conditional classes via clsx', () => {
    expect(cn('a', { b: true, c: false })).toBe('a b')
  })
})
