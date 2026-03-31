import { format, parseISO, formatDistance } from 'date-fns';
import { ptBR, enUS, es } from 'date-fns/locale';

const locales = {
  'pt-BR': ptBR,
  en: enUS,
  es: es,
};

export const formatDate = (
  date: string | Date,
  formatStr: string = 'dd/MM/yyyy',
  locale: keyof typeof locales = 'pt-BR',
): string => {
  const dateObj = typeof date === 'string' ? parseISO(date) : date;
  return format(dateObj, formatStr, { locale: locales[locale] });
};

export const formatDateTime = (
  date: string | Date,
  locale: keyof typeof locales = 'pt-BR',
): string => {
  const dateObj = typeof date === 'string' ? parseISO(date) : date;
  return format(dateObj, 'dd/MM/yyyy HH:mm', { locale: locales[locale] });
};

export const formatRelativeTime = (
  date: string | Date,
  locale: keyof typeof locales = 'pt-BR',
): string => {
  const dateObj = typeof date === 'string' ? parseISO(date) : date;
  return formatDistance(dateObj, new Date(), {
    addSuffix: true,
    locale: locales[locale],
  });
};
