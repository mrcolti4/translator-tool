import { CardDescription } from "@/components/ui/card";

interface Chapter {
    title: string;
    pageStart: number;
    pageEnd: number;
    words: number;
}

type Props = {
    chapter: Chapter;
}

export default function ChapterInfo({ chapter }: Props) {
    return (
        <div className="bg-white rounded-lg p-3 text-black flex items-center justify-between">
            <div>
                <h3>{chapter.title}</h3>
                <CardDescription>Pages {chapter.pageStart}-{chapter.pageEnd}</CardDescription>
            </div>
            <p className="font-black">{chapter.words} words</p>
        </div>
    );
}
