'use client';

import React, { useEffect, useRef, useState } from 'react';
import { FaAngleDown, FaAngleUp } from 'react-icons/fa';
import { useOnClickOutside } from 'usehooks-ts';

import cn from '@utils/cn';

interface Props {
  hours: any[];
}

const BankStatus: React.FC<Props> = ({ hours }) => {
  const [status, setStatus] = useState('Closed');
  const [showHours, setShowHours] = useState(false);

  const ref = useRef(null);
  useOnClickOutside(ref, () => setShowHours(false));

  useEffect(() => {
    const getCurrentDayAndTime = () => {
      const now = new Date();
      const currentDay = now.toLocaleString('en-US', { weekday: 'long' });
      const currentTime = now.toLocaleString('en-US', {
        hour: 'numeric',
        minute: 'numeric',
        hour12: true,
      });
      const currentDate = now.toLocaleString('en-US', {
        month: 'numeric',
        day: 'numeric',
        year: 'numeric',
      });

      return { currentDay, currentTime, currentDate };
    };

    const { currentDay, currentTime, currentDate } = getCurrentDayAndTime();

    const bankHours = hours.find((hour: any) => hour.day === currentDay);

    if (bankHours) {
      const { open, close } = bankHours;
      const openTime = new Date(`${currentDate} ${open}`);
      const closeTime = new Date(`${currentDate} ${close}`);
      const currentDateTime = new Date(`${currentDate} ${currentTime}`);

      if (open === 'Closed' || close === 'Closed') {
        setStatus('Closed');
      } else {
        setStatus(
          currentDateTime >= openTime && currentDateTime <= closeTime
            ? 'Open'
            : 'Closed'
        );
      }
    }
  }, [hours]);

  return (
    <div className="relative">
      <button
        ref={ref}
        className="flex size-full items-center justify-between"
        type="button"
        onClick={() => setShowHours(!showHours)}
      >
        <span
          className={cn(
            'text-sm font-medium',
            status === 'Open' ? 'text-green-500' : 'text-red-500'
          )}
        >
          {status}
        </span>
        {showHours ? (
          <FaAngleUp className="text-gray-500" />
        ) : (
          <FaAngleDown className="text-gray-500" />
        )}
      </button>
      {showHours && (
        <div className="absolute top-6 z-10 h-[220px] w-full flex-1 rounded border bg-white px-4 py-2">
          <ul className="divide-y-[1px]">
            {hours.map((hour: any) => (
              <li key={hour.day} className="flex justify-between py-1">
                <span>{hour.day}</span>
                <span className="text-gray-600">
                  {hour.open === 'Closed'
                    ? 'Closed'
                    : `${hour.open} - ${hour.close}`}
                </span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default BankStatus;
