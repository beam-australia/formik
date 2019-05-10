import { months, years } from '../dates'

describe('Days()', () => {
  // ..todo
})

describe('Months()', () => {
  it('has correct months', () => {
    expect(months.map(month => month.label)).toEqual([
      'Month',
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December'
    ])
  })
})

describe('Years()', () => {
  it('has correct number of years', () => {
    expect(years.length).toBe(31)
  })
  it('has label item', () => {
    expect(years[0].label).toBe('Year')
  })
  it('has correct first year', () => {
    const currentYear = new Date().getFullYear()
    expect(years[1].label).toBe(currentYear)
  })
  it('has correct last year', () => {
    const lastYear = new Date().getFullYear() - 29
    expect(years[years.length - 1].label).toBe(lastYear)
  })
})
