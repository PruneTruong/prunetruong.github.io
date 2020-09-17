export default function truncateText(text: string, maxLength: number) {
  if (text.length <= maxLength) return text;

  return text.substr(0, maxLength - 1) + '…';
}
