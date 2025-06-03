import type {ReactElement} from "react";

export type EventType = {
    id: string;
    title: string;
    description?: string;
    location: string;
    date: Date;
    time: string;
    category: string;
    imageUrl?: string;
    createdAt?: Date;
    updatedAt?: Date;
}

export type Theme = {
    darkMode: boolean;
    toggleDarkMode: (mode: boolean) => void;
}

export interface EventProps {
    event: EventType;
    index: number;
}

export interface ExpanderProps {
    title: string;
    description: string;
    isOpen: boolean;
    onClick: (key: number) => void;
}

export interface HiddenButtonProps {
    key: number | string;
    onClick: () => void;
    label: string;
    icon: ReactElement;
    isOpen: boolean;
    theme?: boolean;
}

export type ServiceType = {
    name: string;
    icon: ReactElement;
    contain: Array<{
        title: string;
        image: string | ReactElement | null;
    }>;
    description: string;
}