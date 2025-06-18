import { useState } from "react";
import AppLayout from "@/layouts/app-layout";
import { Button } from "@/components/ui/button";
import BookContent from "@/components/books/book-content";
import SelectedBook from "@/components/books/selected-book";

type step = "content" | "metadata";


export default function Create({ book }) {
    const [step, setStep] = useState<step>("content");

    return (
        <AppLayout>
            {step === "content" && null !== book ? (
                <>
                    <BookContent book={{ pages: 100, chapters: 5, words: 20000 }} />
                    <div className="mt-2 flex gap-2">
                        <Button className="cursor-pointer" onClick={() => setStep("upload")}>Back</Button>
                        <Button className="cursor-pointer" onClick={() => setStep("metadata")}>Next</Button>
                    </div>
                </>
            ) : null}
            {step === "metadata" && null !== book ? (
                <SelectedBook book={book} setStep={setStep} />
            ) : null}
        </AppLayout>
    );
}
