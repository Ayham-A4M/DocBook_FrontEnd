import { format } from 'date-fns'
const timeFormat = (time) => {
    return format(time, 'h:mm a');
}

export default timeFormat