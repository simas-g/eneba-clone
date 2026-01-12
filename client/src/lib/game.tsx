import type { CONSOLES } from './consoles';

export type ConsoleKey = keyof typeof CONSOLES;

export interface Game {
    id: number;
    title: string;
    description: string;
    image_url: string;
    price: number;
    discount_price: number;
    console: ConsoleKey;
    region: 'EUROPE' | 'GLOBAL';
}