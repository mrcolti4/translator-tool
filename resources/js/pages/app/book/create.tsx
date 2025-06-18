import BookContent from "@/components/books/book-content";
import SelectedBook from "@/components/books/selected-book";
import { Button } from "@/components/ui/button";
import { CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import AppLayout from "@/layouts/app-layout";
import { Head, useForm } from "@inertiajs/react";
import { Form, FormControl, FormField, FormLabel } from "@radix-ui/react-form"
import { ChangeEvent, useState } from "react";

type FormValues = {
    file: File | null;
    title: string;
    author: string;
    originalLanguage: string;
    targetLanguage: string;
    genre: string;
    description: string | null;
}

export default function Create() {
    const [step, setStep] = useState<string>("upload");
    const { data, setData } = useForm<FormValues>({
        file: null,
        title: '',
        author: '',
        originalLanguage: '',
        targetLanguage: '',
        genre: '',
        description: '',
    });

    const handleUploadFile = (e: MouseEvent) => {
        setStep("content");
    }

    const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
        const files = e.currentTarget.files;

        if (null !== files && files.length !== 0)
            setData('file', files[0])
    }

    return <AppLayout>
        <Head title="Create book" />
        <div className="p-4">
            <CardTitle className="text-3xl mb-2">Create book from PDF</CardTitle>
            <p className="pl-4 mb-2">Upload a PDF file and create a new book project for translation</p>
            <Separator className="my-4" />
            {step === "upload" ? (
                <Form className="flex flex-col gap-4">
                    <FormField className="flex flex-col gap-2" name="file">
                        <FormLabel>Choose file</FormLabel>
                        <FormControl className="bg-white text-black" type="file" onInput={handleFileChange} />
                    </FormField>
                    <Button type="button" className="cursor-pointer" onClick={handleUploadFile}>Upload file</Button>
                </Form>
            ) : null}
            {step === "content" && null !== data.file ? (
                <>
                    <BookContent book={{ pages: 100, chapters: 5, words: 20000 }} />
                    <div className="mt-2 flex gap-2">
                        <Button className="cursor-pointer" onClick={() => setStep("upload")}>Back</Button>
                        <Button className="cursor-pointer" onClick={() => setStep("metadata")}>Next</Button>
                    </div>
                </>
            ) : null}
            {step === "metadata" && null !== data.file ? (
                <SelectedBook file={data.file} setData={setData} setStep={setStep} />
            ) : null}
        </div>
    </AppLayout>
}
