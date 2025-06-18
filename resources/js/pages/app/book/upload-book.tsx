import BookContent from "@/components/books/book-content";
import SelectedBook from "@/components/books/selected-book";
import { Button } from "@/components/ui/button";
import { CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import AppLayout from "@/layouts/app-layout";
import { Head, useForm } from "@inertiajs/react";
import { Form, FormControl, FormField, FormLabel, FormSubmit } from "@radix-ui/react-form"
import { ChangeEvent, FormEvent } from "react";

type FormValues = {
    file: File | null;
}

export default function UploadBook() {
    const { data, setData, post } = useForm<FormValues>({
        file: null,
    });

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        post('/book/upload-book');
    }

    const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
        const files = e.currentTarget.files;

        if (null !== files && files.length !== 0)
            setData('file', files[0])
    }

    return <AppLayout>
        <Head title="Create book" />
        <div className="p-4">
            <CardTitle className="text-3xl mb-2">Create book from EPUB</CardTitle>
            <p className="pl-4 mb-2">Upload a EPUB file and create a new book project for translation</p>
            <Separator className="my-4" />
            <Form className="flex flex-col gap-4" onSubmit={handleSubmit}>
                <FormField className="flex flex-col gap-2" name="file">
                    <FormLabel>Choose file</FormLabel>
                    <FormControl className="bg-white text-black" type="file" onInput={handleFileChange} />
                </FormField>
                <FormSubmit asChild>
                    <Button className="cursor-pointer">Upload file</Button>
                </FormSubmit>
            </Form>
        </div>
    </AppLayout>
}
