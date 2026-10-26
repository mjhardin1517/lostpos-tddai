import { expect, test } from 'vitest'
import { render, screen } from '@testing-library/react'

test('renders', () => {
    render(<h1>Home</h1>)
    expect(screen.getByRole('heading', { level: 1, name: 'Home' })).toBeDefined()
})