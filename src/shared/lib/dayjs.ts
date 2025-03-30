import dayjs from 'dayjs';

export const formatDate = (date: string) => dayjs(date).format('DD.MM.YYYY');
export const formatTime = (date: string) => dayjs(date).format('HH:mm');
