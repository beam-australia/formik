import { months, years } from '../dates'

describe('Months()', () => {
  it('has correct months', () => {
    expect(months.map(month => month.name)).toEqual([
      'Month',
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec'
    ])
  })
})

describe('Years()', () => {
  it('has correct number of years', () => {
    expect(years.length).toBe(31)
  })
  it('has label item', () => {
    expect(years[0].name).toBe('Year')
  })
  it('has correct first year', () => {
    const currentYear = new Date().getFullYear()
    expect(years[1].name).toBe(currentYear)
  })
  it('has correct last year', () => {
    const lastYear = new Date().getFullYear() - 29
    expect(years[years.length - 1].name).toBe(lastYear)
  })
})
