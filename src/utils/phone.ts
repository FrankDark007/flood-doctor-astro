export function toTelHref(phone: string): string {
  const digits = phone.replace(/\D/g, '')
  const normalized = digits.length === 10 ? `1${digits}` : digits

  return normalized ? `tel:+${normalized}` : 'tel:+18774970007'
}
