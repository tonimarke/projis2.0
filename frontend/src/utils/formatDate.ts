export default function formatDate(data: string): string {
  var dt = new Date(data).toLocaleString('pt-BR', { timeZone: 'America/Sao_Paulo' });

  return dt;
}
