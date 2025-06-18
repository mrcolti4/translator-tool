import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import ChapterInfo from "./chapter-info";

interface Book {
    pages: number;
    chapters: number;
    words: number;
}

export default function BookContent({ book }: { book: Book }) {
    return (
        <Card>
            <CardHeader>
                <CardTitle className="text-2xl mb-4">Parsing results</CardTitle>
                <div className="flex justify-between items-center">
                    <div className="text-center">
                        <p>{book.pages}</p>
                        <p>Total pages</p>
                    </div>
                    <div className="text-center">
                        <p>{book.words}</p>
                        <p>Total words</p>
                    </div>
                    <div className="text-center">
                        <p>{book.chapters}</p>
                        <p>Chapters detected</p>
                    </div>
                </div>
            </CardHeader>
            <CardContent>
                <p className="mb-2">Chapter structure</p>
                <ChapterInfo chapter={{ title: "Chapter 1: The Beginning", pageStart: 1, pageEnd: 15, words: 5240 }} />
            </CardContent>
        </Card>
    );
}
