import { parseISO, format } from 'date-fns'

const Date = ({ dateString }) => {
    const date = parseISO(dateString);
    return (
        <time dateTime={dateString}>{format(date, 'MMM yyyy')}</time>
    )
}

export default Date
