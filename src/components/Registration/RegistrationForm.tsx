'use client';
import {
  formGenders,
  formQualifications,
  kp_cities,
} from '@/components/Registration/FormEntryData';
import SendOTP from '@/components/Registration/SendOTP';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { cn } from '@/lib/utils';
import { RegistrationFormSchema } from '@/lib/zodValidation';
import { zodResolver } from '@hookform/resolvers/zod';
import { format } from 'date-fns';
import { CalendarIcon } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { z } from 'zod';
const Registeration = () => {
  const [loading, setloading] = useState(false);

  const form = useForm<z.infer<typeof RegistrationFormSchema>>({
    resolver: zodResolver(RegistrationFormSchema),
    defaultValues: {
      fullName: '',
      fatherName: '',
      cnic: '',
      phoneNumber: '',
      city: '',
      email: '',
      otp: '',
      dateOfBirth: new Date(),
      gender: 'male',
      highestQualification: 'Matric / O Levels',
    },
  });

  const registerStudent = async (
    data: z.infer<typeof RegistrationFormSchema>
  ) => {
    setloading(true);
    const response = await fetch('/api/registration', {
      body: JSON.stringify(data),
      method: 'POST',
    });

    const res = await response.json();

    if (!response.ok) throw new Error(res.message);

    return res;
  };

  async function onSubmit(data: z.infer<typeof RegistrationFormSchema>) {
    console.log(data);

    toast.promise(registerStudent(data), {
      loading: `Registring ${data.fullName} ...`,
      success: () => {
        setloading(false);
        return `${data.fullName} Successfully Registered`;
      },
      error: (err) => {
        setloading(false);
        return `Failed to register student: ${err.message}`;
      },
    });
  }
  const dobFromDate = new Date();
  dobFromDate.setFullYear(dobFromDate.getFullYear() - 120);

  return (
    <div className="flex min-h-full flex-1 flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-xl">
        <h1 className="mt-6 text-center text-3xl font-bold leading-9 tracking-tight text-custom-color">
          Student Course Registration Form
        </h1>
        <p className=" mt-3 text-center text-base text-gray-500">
          Already applied?
          <Link
            href="/entrance-card"
            className="font-semibold leading-6 pl-2 text-custom-color underline underline-offset-4"
          >
            Get Admit Card
          </Link>
        </p>
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
                name="fullName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Full Name</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Full Name"
                        {...field}
                        className={
                          form.formState.errors.fullName
                            ? 'border-red-500 focus-visible:ring-red-500'
                            : 'focus-visible:ring-custom-color'
                        }
                      />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="fatherName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Father&apos;s Full Name</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Father's Full Name"
                        {...field}
                        className={
                          form.formState.errors.fatherName
                            ? 'border-red-500 focus-visible:ring-red-500'
                            : 'focus-visible:ring-custom-color'
                        }
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div
                className={`flex w-full  space-x-2 ${
                  form.formState.errors.email ? 'items-center' : 'items-end'
                }`}
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
                <SendOTP
                  error={form.formState.errors.email}
                  getValue={form.getValues}
                />
              </div>
              <FormField
                control={form.control}
                name="otp"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>OTP</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="OTP"
                        {...field}
                        className={
                          form.formState.errors.otp
                            ? 'border-red-500 focus-visible:ring-red-500'
                            : 'focus-visible:ring-custom-color'
                        }
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
              <FormField
                control={form.control}
                name="phoneNumber"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Phone Number</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Phone Number"
                        {...field}
                        className={
                          form.formState.errors.phoneNumber
                            ? 'border-red-500 focus-visible:ring-red-500'
                            : 'focus-visible:ring-custom-color'
                        }
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="city"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>City </FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger
                          className={
                            form.formState.errors.city
                              ? 'border-red-500 focus-visible:ring-red-500'
                              : 'focus-visible:ring-custom-color focus:ring-custom-color'
                          }
                        >
                          <SelectValue placeholder="Select a City " />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {kp_cities.map((city, index) => (
                          <SelectItem
                            className="focus:bg-custom-color focus:text-white"
                            key={index}
                            value={city}
                          >
                            {city}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="gender"
                render={({ field }) => (
                  <FormItem className="space-y-3">
                    <FormLabel>Gender</FormLabel>
                    <FormControl>
                      <RadioGroup
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                        className="flex space-y-1"
                      >
                        {formGenders.map((gender, index) => (
                          <FormItem
                            key={index}
                            className="flex items-center space-x-3 space-y-0"
                          >
                            <FormControl>
                              <RadioGroupItem value={gender} />
                            </FormControl>
                            <FormLabel className="font-normal">
                              {gender.toUpperCase()}
                            </FormLabel>
                          </FormItem>
                        ))}
                      </RadioGroup>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="highestQualification"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Highest Qualification </FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger
                          className={
                            form.formState.errors.highestQualification
                              ? 'border-red-500 focus-visible:ring-red-500'
                              : 'focus-visible:ring-custom-color focus:ring-custom-color'
                          }
                        >
                          <SelectValue placeholder="Highest Qualification" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {formQualifications.map((qualification, index) => (
                          <SelectItem
                            className="focus:bg-custom-color focus:text-white"
                            key={index}
                            value={qualification}
                          >
                            {qualification}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="dateOfBirth"
                render={({ field }) => (
                  <FormItem className="flex flex-col">
                    <FormLabel>Date of birth</FormLabel>
                    <Popover>
                      <PopoverTrigger asChild>
                        <FormControl>
                          <Button
                            variant={'outline'}
                            className={cn(
                              'w-[240px] pl-3 text-left font-normal',
                              !field.value && 'text-muted-foreground'
                            )}
                          >
                            {field.value ? (
                              format(field.value, 'PPP')
                            ) : (
                              <span>Pick a date</span>
                            )}
                            <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                          </Button>
                        </FormControl>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          mode="single"
                          defaultMonth={field.value}
                          selected={field.value}
                          onSelect={field.onChange}
                          fixedWeeks
                          weekStartsOn={1}
                          fromDate={dobFromDate}
                          toDate={new Date()}
                          disabled={(date) =>
                            date > new Date() || date < new Date('1900-01-01')
                          }
                          initialFocus
                          captionLayout="dropdown-buttons"
                        />
                      </PopoverContent>
                    </Popover>

                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button
                className=" bg-custom-color hover:bg-custom-color"
                disabled={loading}
                // disabled={!form.formState.isValid || !form.formState.isDirty}
                type="submit"
              >
                Submit
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Registeration;
