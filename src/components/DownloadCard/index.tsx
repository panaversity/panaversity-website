// import EntranceCard from "./EntranceCard";
"use client";
import { EntranceCardT } from "@/types/types";
import Link from "next/link";
import { Mail } from "lucide-react";
import { Button } from "../ui/button";
import PrintableCard from "./printableCard";
import EntranceCard from "./entrancecard";

interface Props {
  data: EntranceCardT;
}

const DownloadEntranceCard: React.FC<Props> = ({ data }) => {
  return (
    <div className="mx-auto my-6 flex w-full max-w-4xl flex-col items-center justify-center gap-6">
      <div className="w-[95%] text-justify print:hidden">
        <h3 className="capitalize text-custom-color">Dear {data.fullName},</h3>
        <p className="my-4">
          Thank you for expressing your interest in the{" "}
          <b>
            CM KPK Initiative for Generative AI and Cloud Computing,{" "}
            <i>A Nation Building Program By Collaboration of</i> Government of
            Khyber Pakhtunkhwa, PIAIC and Panacloud.
          </b>
        </p>
        <p>
          We have successfully received your application and assigned you
          Registration Number: {`${data.studentId}`.padStart(8, "0")}.{" "}
          <b>Please Note Down your Registration Number.</b>
        </p>
        <p className="my-4">
          Now that you&apos;ve applied, the next step will be the entrance exam.
          The details of the entrance exam, including the venue and date will be
          emailed to you. If you haven&apos;t already downloaded your Entrance
          card please download it and save it. You&apos;ll need it when you come
          for the entrance exam. Please click the download button below to save
          your admit card.
        </p>
        <p>
          While applications are being accepted, we encourage you to begin
          preparing for the entrance exam. The entrance exam will be split into
          3 parts:
        </p>
        <ul className="my-4 list-[upper-roman]">
          <li className="ml-14 pl-6">English (Reading & Vocabulary)</li>
          <li className="ml-14 pl-6">Mathematics (10th Grade Math)</li>
          <li className="ml-14 pl-6">Intelligence Quotient (IQ)</li>
        </ul>
        <p>
          For those students who are new to the computer field, you can get a
          jump start on your learning immediately by starting HTML and CSS:{" "}
        </p>
        <ul>
          <li className="my-4">
            <span className="block font-semibold">
              Learn HTML by Hira Khan (Watch Recorded Videos)
            </span>
            <Link
              className="text-main underline"
              href="https://www.youtube.com/playlist?list=PLKvqnz8z1zWQ3BALy86tIXICkG874wAc6"
              target="_blank"
            >
              youtube.com/playlist?list=PLKvqnz8z1zWQ3BALy86tIXICkG874wAc6
            </Link>
          </li>
          <li>
            <span className="block font-semibold">
              Learn CSS Intro by Hira Khan (Watch Recorded Videos)
            </span>
            <Link
              className="text-main underline"
              href="https://www.youtube.com/playlist?list=PLKvqnz8z1zWQSWIen_zUSEBmtqzPLuRob"
              target="_blank"
            >
              youtube.com/playlist?list=PLKvqnz8z1zWQSWIen_zUSEBmtqzPLuRob
            </Link>
          </li>
        </ul>
        <p className="mt-4">
          CM KPK Initiative for
          <b className="block font-bold">Generative AI and Cloud Computing</b>
          <Link
            className="mt-4 flex items-center text-main underline"
            href="mailto:admin@cyberabad.ai"
            target="_blank"
          >
            <Mail className="mr-3 h-6 w-6 text-main" />
            khubaib.mk@gmail.com
          </Link>
        </p>
      </div>

      <EntranceCard data={data} />
      <PrintableCard data={data} />
      <Button
        className="after:hover:w-0 bg-custom-color py-2.5 px-4 rounded-md text-white border-2 border-white duration-300 text-lg font-medium hover:scale-105 leading-6 text-center print:hidden"
        onClick={() => window.print()}
      >
        DOWNLOAD
      </Button>
    </div>
  );
};

export default DownloadEntranceCard;
