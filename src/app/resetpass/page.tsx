import React from 'react';

import { Button } from '@components/ui/Button';
import { Input } from '@components/ui/Input';

function ResetPage() {
  return (
    <div
      className="flex items-center justify-center"
      style={{
        backgroundColor: '#f3f4f6',
        height: 'calc(100vh - 70px)',
      }}
    >
      <div className="flex max-w-3xl flex-col justify-center gap-4 rounded bg-white p-8 shadow">
        <h4 className="text-2xl text-gray-700">Reset Your Password</h4>
        <p className="text-sm text-gray-500">
          Enter the email registered with your Preserve Oakville account.
        </p>
        <Input id="email" type="email" placeholder="example@abc.com" />
        <Button variant="default">Send Link</Button>
      </div>
    </div>
  );
}

export default ResetPage;
