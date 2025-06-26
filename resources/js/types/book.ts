
export interface Book {
    info: {
        title: string;
        creator: string;
        language: string;
        description: string;
    };
    chapters: {
        images: {
            src: string;
            alt: string;
            size: number;
        }[];
        wordsCount: number;
        charCount: number;
    }[];
}
