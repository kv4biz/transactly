"use client";

import * as React from "react";
import { addDays, format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

interface DatePickerProps {
  selectedDate: Date | undefined;
  onDateChange: (date: Date | undefined) => void; // Function to handle date change
}

export function DatePicker({ selectedDate, onDateChange }: DatePickerProps) {
  const handleDateChange = (date: Date | undefined) => {
    if (date) {
      // Add one day to the selected date
      const updatedDate = addDays(date, 1);
      onDateChange(updatedDate);
    } else {
      // Handle case where date is undefined (e.g., clear selection)
      onDateChange(undefined);
    }
  };

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={"outline"}
          className={cn(
            "input-class w-full",
            !selectedDate && "text-muted-foreground"
          )}
        >
          <CalendarIcon className="mr-2 h-4 w-4 text-gray-500" />
          {selectedDate ? (
            format(selectedDate, "PPP")
          ) : (
            <span className="text-gray-500 text-16 font-normal">
              Enter D.O.B
            </span>
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <Calendar
          mode="single"
          selected={selectedDate}
          onSelect={handleDateChange}
          initialFocus
          captionLayout="dropdown-buttons"
          fromYear={1940}
          toYear={2024}
          className="bg-white"
        />
      </PopoverContent>
    </Popover>
  );
}
