import { atcb_init } from "add-to-calendar-button"
import 'add-to-calendar-button/assets/css/atcb.css';
import { useEffect, useMemo } from "react";

export const AddToCalendarButton = ({ name = "Add the title of your event",
    description = "A nice description does not hurt",
    startDate = "2022-02-21",
    endDate = "2022-03-24",
    startTime = "10:13",
    endTime = "17:57",
    location = "Somewhere over the rainbow",
    label = "Add to Calendar",
    options = [
        "Apple",
        "Google",
        "iCal",
        "Microsoft365",
        "MicrosoftTeams",
        "Outlook.com",
        "Yahoo"
    ],
    timeZone = "Europe/Berlin",
    iCalFileName = "Reminder-Event" }) => {
    useEffect(() => {
        return atcb_init
    }, [])
    const config = useMemo(() => `
    {
        "name":"${name}",
        "description":"${description}",
        "startDate":"${startDate}",
        "endDate":"${endDate}",
        "startTime":"${startTime}",
        "endTime":"${endTime}",
        "location":"${location}",
        "label":"${label}",
        "options":[${options.map(item => `"${item}"`)}],
        "timeZone":"${timeZone}",
        "iCalFileName":"${iCalFileName}"
        }
    `, [])
    return <div className="atcb" style={{ display: 'none' }}>
        {config.toString()}
    </div>
}