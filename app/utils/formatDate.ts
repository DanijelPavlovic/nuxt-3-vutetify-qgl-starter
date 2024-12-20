import { format } from 'date-fns'

export const formatDate = (date: string, defaultFormat: string = 'yyyy-MM-dd') => {
	return format(new Date(date), defaultFormat)
}
