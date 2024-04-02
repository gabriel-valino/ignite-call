import { useState } from 'react'
import { CalendarStep } from './calendarStep'
import { ConfirmStep } from './confirmStep'

export function ScheduleForm() {
  const [selectedDateWithTime, setSelectedDateWithTime] =
    useState<Date | null>()

  function handleClearSelectedDateTime() {
    setSelectedDateWithTime(null)
  }

  if (selectedDateWithTime) {
    return (
      <ConfirmStep
        schedulingDate={selectedDateWithTime}
        onCancelConfirmation={handleClearSelectedDateTime}
      />
    )
  }

  return <CalendarStep onSelectDateTime={setSelectedDateWithTime} />
}
