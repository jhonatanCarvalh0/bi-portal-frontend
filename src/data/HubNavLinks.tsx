import { ArrowRight } from 'lucide-react';
import type { HubNavLink } from '../interfaces/hubNavLinksInterface';

const HubNavLinks: HubNavLink[] = [
  { title: 'Página CGM', path: 'https://cgm.portovelho.ro.gov.br/', icon: <ArrowRight size={16} /> },
  // { title: 'Painéis', path: '#painel', icon: <ArrowRight size={16} /> },
  // { title: 'Sobre', path: '#sobre', icon: <ArrowRight size={16} /> },
  { title: 'Contato', path: 'https://servicos.portovelho.ro.gov.br/secretaria/EkqNz7x3VXyMYerEdOBQn6LlRGJ54r/expediente', icon: <ArrowRight size={16} /> },
];

export default function getHubNavLinks() {
  return HubNavLinks;
}
