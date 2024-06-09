export function formatHour(data: Date, addOneHouer = false) {
  if (addOneHouer) {
    data.setHours(data.getHours() + 1)
  }
  let hour = data.getUTCHours().toString()
  let minute = data.getUTCMinutes().toString()

  hour = hour.toString().padStart(2, '0')
  minute = minute.toString().padStart(2, '0')

  return `${hour}:${minute}`
}
