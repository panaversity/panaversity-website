'use client';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import React, { useState } from 'react';
import { z } from 'zod';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { ResultRequirementsSchema } from '@/lib/zodValidation';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';
import { ResultT } from '@/types/types';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Label } from '@/components/ui/label';
const StudentResult = () => {
  const [loading, setloading] = useState(false);
  const [resultData, setResultData] = useState<ResultT | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const form = useForm<z.infer<typeof ResultRequirementsSchema>>({
    resolver: zodResolver(ResultRequirementsSchema),
    defaultValues: {
      cnic: '',
      id: '',
    },
  });

  const getResult = async (data: z.infer<typeof ResultRequirementsSchema>) => {
    setloading(true);
    const response = await fetch('/api/getresult', {
      body: JSON.stringify(data),
      method: 'POST',
    });

    const res = await response.json();

    if (!response.ok) throw new Error(res.message);

    return res;
  };

  async function onSubmit(data: z.infer<typeof ResultRequirementsSchema>) {
    console.log(data);

    toast.promise(getResult(data), {
      loading: `Getting Result ...`,
      success: (data: ResultT) => {
        setResultData(data);
        setloading(false);
        setIsDialogOpen(true);
        return `Got Your Result`;
      },
      error: (err) => {
        setResultData(null);
        setloading(false);
        return `Failed to Fetch Student Data: ${err.message}`;
      },
    });
  }
  const formatDate = (dateString: string): string => {
    const date = new Date(dateString);
    const options: Intl.DateTimeFormatOptions = {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    };
    return date.toLocaleDateString(undefined, options);
  };
  console.log('Result', resultData);
  return (
    <div className="flex min-h-full flex-1 flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-xl">
        <h1 className="mt-6 text-center text-3xl font-bold leading-9 tracking-tight text-custom-color">
          Entrance Exam Result
        </h1>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-lg">
        <div className="bg-white px-6 py-12 shadow-xl  sm:rounded-lg sm:px-12">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-6"
              // action='#'
              // method='POST'
            >
              <FormField
                control={form.control}
                name="id"
                render={({ field }) => (
                  <FormItem className=" w-full">
                    <FormLabel>Registration Number</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Registration Number"
                        {...field}
                        className={` ${
                          form.formState.errors.id
                            ? 'border-red-500 focus-visible:ring-red-500'
                            : 'focus-visible:ring-custom-color'
                        } `}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="cnic"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>CNIC or B-Form Number</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="CNIC or B-Form Number"
                        {...field}
                        className={
                          form.formState.errors.cnic
                            ? 'border-red-500 focus-visible:ring-red-500'
                            : 'focus-visible:ring-custom-color'
                        }
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button
                disabled={loading}
                className=" bg-custom-color hover:bg-custom-color"
                // disabled={!form.formState.isValid || !form.formState.isDirty}
                type="submit"
              >
                GET RESULT
              </Button>
            </form>
          </Form>
        </div>
      </div>
      {isDialogOpen && (
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogContent className="sm:max-w-lg">
            <DialogHeader>
              <DialogTitle>Entrance Exam Result</DialogTitle>
              <DialogDescription>
                Result for CM KP Gen-AI Program
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="flex items-center gap-4">
                <Label htmlFor="name" className="text-lg font-bold w-fit">
                  Name:
                </Label>
                <p className=" text-lg  font-medium w-fit">
                  {resultData?.name || 'John Doe'}
                </p>
              </div>
              <div className="flex items-center gap-4">
                <Label htmlFor="status" className="text-lg font-bold w-fit">
                  Status:
                </Label>
                <p className="text-lg  font-medium w-fit">
                  {resultData?.status || 'Not Avaliable'}
                </p>
              </div>
              <div className="flex items-center gap-4">
                <Label htmlFor="exam_date" className=" text-lg font-bold w-fit">
                  Exam Date:
                </Label>
                <p className=" text-lg  font-medium w-fit ">
                  {formatDate(resultData?.exam_date ?? '') || 'Not Avaliable'}
                </p>
              </div>
            </div>
            <DialogFooter>
              <DialogClose asChild>
                <Button
                  type="button"
                  className=" bg-custom-color hover:bg-custom-color"
                >
                  Close
                </Button>
              </DialogClose>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
};

export default StudentResult;
