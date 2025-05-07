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
    setDarkMode: (darkMode: boolean) => void;
}