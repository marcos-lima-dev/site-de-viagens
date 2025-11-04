// src/hooks/useTranslation.ts
import { ptBR } from '@/locales/pt-BR';

export const useTranslation = () => {
  return {
    t: (key: keyof typeof ptBR): string => ptBR[key] || key,
  };
};