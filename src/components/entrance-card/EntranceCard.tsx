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
import { EntranceCardRequirementsSchema } from '@/lib/zodValidation';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';
import { EntranceCardT } from '@/types/types';
import DownloadEntranceCard from '@/components/DownloadCard';

const EntranceCard = () => {
  const [loading, setloading] = useState(false);
  const [cardData, setCardData] = useState<EntranceCardT | null>(null);

  const form = useForm<z.infer<typeof EntranceCardRequirementsSchema>>({
    resolver: zodResolver(EntranceCardRequirementsSchema),
    defaultValues: {
      cnic: '',
      email: '',
    },
  });

  const getCard = async (
    data: z.infer<typeof EntranceCardRequirementsSchema>
  ) => {
    setloading(true);
    const response = await fetch('/api/generateEntryTestCard', {
      body: JSON.stringify(data),
      method: 'POST',
    });

    const res = await response.json();

    if (!response.ok) throw new Error(res.message);

    return res;
  };

  async function onSubmit(
    data: z.infer<typeof EntranceCardRequirementsSchema>
  ) {
    console.log(data);

    toast.promise(getCard(data), {
      loading: `Getting Your Card ...`,
      success: (data: EntranceCardT) => {
        setCardData(data);
        setloading(false);
        return `Download Your Card`;
      },
      error: (err) => {
        setCardData(null);
        setloading(false);
        return `Failed to Fetch Student Data: ${err.message}`;
      },
    });
  }
  console.log('Card', cardData);
  return (
    <>
      {!cardData ? (
        <div className="flex min-h-full flex-1 flex-col justify-center py-12 sm:px-6 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-xl">
            <h1 className="mt-6 text-center text-3xl font-bold leading-9 tracking-tight text-custom-color">
              Download Admit Card
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
                    name="email"
                    render={({ field }) => (
                      <FormItem className=" w-full">
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Email"
                            {...field}
                            className={` ${
                              form.formState.errors.email
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
                    GET CARD
                  </Button>
                </form>
              </Form>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <DownloadEntranceCard data={cardData} />
        </div>
      )}
    </>
  );
};

export default EntranceCard;
