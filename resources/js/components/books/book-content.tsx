import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import ChapterInfo from "./chapter-info";
import { Book } from "@/types/book";
import { Separator } from "../ui/separator";
import ParsingResultTitle from "./parsing-result-title";
import ParsingResultSubtitle from "./parsing-result-subtitle";


export default function BookContent({ book }: { book: Book }) {
    console.log(book);

    return (
        <Card>
            <CardHeader>
                <CardTitle className="text-2xl mb-4">Parsing results</CardTitle>
                <div className="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0">
                    <div className="text-center">
                        <ParsingResultSubtitle className="text-teal-500">{book.chapters.length}</ParsingResultSubtitle>
                        <ParsingResultTitle>Chapters detected</ParsingResultTitle>
                    </div>
                    <div className="text-center">
                        <ParsingResultSubtitle className="text-yellow-300">{book.chapters.reduce((prev, current) => prev + current.wordsCount, 0)}</ParsingResultSubtitle>
                        <ParsingResultTitle>Total words</ParsingResultTitle>
                    </div>
                    <div className="text-center">
                        <ParsingResultSubtitle className="text-blue-500">{book.chapters.reduce((prev, current) => prev + current.charCount, 0)}</ParsingResultSubtitle>
                        <ParsingResultTitle>Total characters</ParsingResultTitle>
                    </div>
                    <div className="text-center">
                        <ParsingResultSubtitle className="text-pink-500">{book.chapters.reduce((prev, curr) => prev + curr.images.length, 0)}</ParsingResultSubtitle>
                        <ParsingResultTitle>Images</ParsingResultTitle>
                    </div>
                </div>
            </CardHeader>
            <Separator />
            <CardContent>
                <p className="mb-2">Media assets</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {book.chapters.map((chapter, index) => chapter.images.length > 0 ? (
                        <div key={index}>
                            <h3 className="text-lg font-medium mb-1">Chapter {index + 1}</h3>
                            {chapter.images.map((image, index) => (
                                <div key={index} className="flex justify-between text-sm">
                                    <p>{image.src}</p>
                                    <p className="text-gray-500">{image.size} KB</p>
                                </div>
                            )
                            )}
                        </div>
                    ) : null)}
                </div>
            </CardContent>
        </Card>
    );
}
