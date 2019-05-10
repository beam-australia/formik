export const days = (date) => {
  const days = [
    { value: '', label: 'Day', disabled: true }
  ]
  const numberOfDays = new Date(date.getFullYear(), date.getMonth(), 0).getDate()
  for (let i = 1; i < (numberOfDays + 1); i++) {
    days.push({ value: i, label: i })
  }
  return days
}

export const months = [
  { value: '', label: 'Month', disabled: true },
  { label: 'January', value: 0 },
  { label: 'February', value: 1 },
  { label: 'March', value: 2 },
  { label: 'April', value: 3 },
  { label: 'May', value: 4 },
  { label: 'June', value: 5 },
  { label: 'July', value: 6 },
  { label: 'August', value: 7 },
  { label: 'September', value: 8 },
  { label: 'October', value: 9 },
  { label: 'November', value: 10 },
  { label: 'December', value: 11 }
]

export const years = (() => {
  const currentYear = (new Date()).getFullYear()
  const years = [{ value: '', label: 'Year', disabled: true }]
  const range = Array.from({ length: 30 }, (_, i) => {
    const year = currentYear + (i * -1)
    return { label: year, value: year }
  })
  return years.concat(range)
})()
