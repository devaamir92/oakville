'use client';

import React, { useEffect, useRef, useState } from 'react';
import { FaAngleDown, FaAngleUp } from 'react-icons/fa';
import { useOnClickOutside } from 'usehooks-ts';

import cn from '@utils/cn';

interface BankHour {
  day: string;
  open: string;
  close: string;
}

interface Props {
  hours: BankHour[];
}

const days = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];

const BankStatus: React.FC<Props> = ({ hours }) => {
  const [status, setStatus] = useState<string>('Closed');
  const [showHours, setShowHours] = useState<boolean>(false);
  const [alwaysOpen, setAlwaysOpen] = useState<boolean>(false);
  const [closingTime, setClosingTime] = useState<Date>(new Date());
  const [nextAvailableDayOpenTime, setNextAvailableDayOpenTime] =
    useState<Date>(new Date());

  const ref = useRef<HTMLButtonElement>(null);
  useOnClickOutside(ref, () => setShowHours(false));

  function getOpenStatus(hour: BankHour) {
    if (alwaysOpen) {
      return '24 Hours';
    }
    if (hour.open === 'Closed' || hour.close === 'Closed') {
      return 'Closed';
    }
    return `${hour.open} - ${hour.close}`;
  }

  const formatClosedMessage = (availableDayOpenTime: Date): string => {
    const nextAvailableDay = availableDayOpenTime.toLocaleDateString('en-US', {
      weekday: 'short',
    });
    const nextAvailableTimeString = availableDayOpenTime.toLocaleTimeString(
      'en-US',
      {
        hour: '2-digit',
        minute: '2-digit',
      }
    );

    return `Opens ${nextAvailableDay} ${nextAvailableTimeString}`;
  };

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

    const getNextAvailableDayAndTime = () => {
      const now = new Date();
      const tempCurrentDay = now.getDay();

      let nextDay = tempCurrentDay + 1;
      if (nextDay === 7) nextDay = 0;

      const findNextDayHours = () => {
        return hours.find(hour => hour.day === days[nextDay]);
      };

      let nextDayHours = findNextDayHours();
      while (
        !nextDayHours ||
        nextDayHours.open === 'Closed' ||
        nextDayHours.close === 'Closed'
      ) {
        nextDay += 1;
        if (nextDay === 7) nextDay = 0;
        nextDayHours = findNextDayHours();
      }

      const nextOpenTime = new Date();
      nextOpenTime.setDate(now.getDate() + (nextDay - tempCurrentDay));
      nextOpenTime.setHours(parseInt(nextDayHours.open.split(':')[0], 10));
      nextOpenTime.setMinutes(parseInt(nextDayHours.open.split(':')[1], 10));

      return nextOpenTime;
    };

    const bankHours = hours.find(hour => hour.day === currentDay);

    if (bankHours) {
      const { open, close } = bankHours;
      const openTime = new Date(`${currentDate} ${open}`);
      const closeTime = new Date(`${currentDate} ${close}`);
      const currentDateTime = new Date(`${currentDate} ${currentTime}`);
      const totalHours = closeTime.getHours() - openTime.getHours();

      if (open === 'Closed' || close === 'Closed') {
        setStatus('Closed');
      } else {
        if (totalHours === 23) {
          setAlwaysOpen(true);
          setStatus('Open');
        } else {
          setClosingTime(closeTime);
        }
        setStatus(
          currentDateTime >= openTime && currentDateTime <= closeTime
            ? 'Open'
            : 'Closed'
        );
      }
    }
    if (status === 'Closed') {
      const nextAvailableTime = getNextAvailableDayAndTime();
      setNextAvailableDayOpenTime(nextAvailableTime);
    }
  }, [hours, status]);

  return (
    <div className="relative">
      <button
        ref={ref}
        className="flex size-full items-center justify-between"
        type="button"
        onClick={() => setShowHours(!showHours)}
      >
        <div
          className={cn(
            'text-sm font-medium',
            status === 'Open' ? 'text-green-500' : 'text-red-500'
          )}
        >
          {status === 'Open' && !alwaysOpen && (
            <p className="flex gap-1 text-gray-700">
              <span className="text-green-500">Open</span>
              {' - '}
              <span>
                Closes{' '}
                {closingTime.toLocaleTimeString('en-US', {
                  hour: '2-digit',
                  minute: '2-digit',
                })}
              </span>
            </p>
          )}

          {status === 'Closed' && (
            <p className="flex gap-1 text-gray-700">
              <span className="text-red-500">Closed</span>
              {' - '}
              <span>{formatClosedMessage(nextAvailableDayOpenTime)} </span>
            </p>
          )}
          {alwaysOpen && '24 Hours'}
        </div>

        {showHours ? (
          <FaAngleUp className="text-gray-500" />
        ) : (
          <FaAngleDown className="text-gray-500" />
        )}
      </button>
      {showHours && (
        <div className="absolute top-6 z-10 h-[220px] w-full flex-1 rounded border bg-white px-4 py-2">
          <ul className="divide-y-[1px]">
            {hours.map(hour => (
              <li key={hour.day} className="flex justify-between py-1">
                <span>{hour.day}</span>
                <span className="text-gray-600">{getOpenStatus(hour)}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default BankStatus;
