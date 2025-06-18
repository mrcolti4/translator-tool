import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

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
                <div className="bg-white rounded-lg p-3 text-black flex items-center justify-between">
                    <div>
                        <h3>Chapter 1: The Beginning</h3>
                        <CardDescription>Pages 1-15</CardDescription>
                    </div>
                    <p className="font-black">5240 words</p>
                </div>
            </CardContent>
        </Card>
    );
}
