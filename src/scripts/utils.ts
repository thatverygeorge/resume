const formatter = new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short' });
const formatterForAriaLabel = new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'long' });

export function formatDate(startDate: string, endDate?: string): string {
  if (!endDate) {
    return `${formatter.format(new Date(startDate))} – Present`;
  }

  return formatter.formatRange(new Date(startDate), new Date(endDate));
}

export function formatDateForAriaLabel(startDate: string, endDate?: string): string {
  if (!endDate) {
    return `From ${formatterForAriaLabel.format(new Date(startDate))} to Present`;
  }

  return `From ${formatterForAriaLabel.format(new Date(startDate))} to ${formatterForAriaLabel.format(new Date(endDate))}`;
}
