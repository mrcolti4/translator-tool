import { useState } from "react";
import AppLayout from "@/layouts/app-layout";
import { Button } from "@/components/ui/button";
import BookContent from "@/components/books/book-content";
import SelectedBook from "@/components/books/selected-book";
import { router } from "@inertiajs/react";
import { Book } from "@/types/book";

type step = "content" | "metadata";


export default function Create({ book }: { book: Book }) {
    const [step, setStep] = useState<step>("content");

    const handleGoBackButton = () => router.visit('/book/upload-book', {
        preserveState: true
    })

    const handleNextStepButton = () => setStep("metadata")

    return (
        <AppLayout>
            {step === "content" && null !== book ? (
                <div className="p-2">
                    <BookContent book={book} />
                    <div className="mt-4 flex gap-2">
                        <Button className="cursor-pointer" onClick={handleGoBackButton}>Back</Button>
                        <Button className="cursor-pointer" onClick={handleNextStepButton}>Next</Button>
                    </div>
                </div>
            ) : null}
            {step === "metadata" && null !== book ? (
                <SelectedBook book={book} setStep={setStep} />
            ) : null}
        </AppLayout>
    );
}
