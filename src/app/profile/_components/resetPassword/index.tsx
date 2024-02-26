'use client';

import { useState } from 'react';
import { BsKey } from 'react-icons/bs';
// import { z } from 'zod';
import { useSession } from 'next-auth/react';

import Modal from '@components/ui/Modal';
import { Input } from '@components/ui/Input';
import { Button } from '@components/ui/Button';

const ResetPassword: React.FC = () => {
  const { data: session } = useSession();

  const [showModal, setShowModal] = useState(false);

  const [errors, setErrors] = useState<any>(null);

  const [state, setState] = useState({
    currentPassword: '',
    newPassword: '',
    rePassword: '',
  });

  const onClose = () => {
    setShowModal(false);
  };
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const res = await fetch(`${process.env.API_HOST}/api/v1/auth/update`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${session?.accessToken}`,
        },
        body: JSON.stringify({
          oldPassword: state.currentPassword,
          password: state.newPassword,
        }),
      });
      const data = await res.json();
      if (data.errors) {
        setErrors(data.errors);
      } else {
        onClose();
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Modal
      title="Reset Password"
      icon={<BsKey />}
      className="rounded bg-primary-400 px-6 py-2 text-sm text-white"
      show={showModal}
      OnClose={onClose}
    >
      <div>
        <div className="mx-auto flex justify-center py-5">
          <h4 className="text-2xl font-medium">Change Your Password</h4>
        </div>
        {errors && (
          <div className="flex h-full items-center rounded border border-red-300 bg-red-100 px-2 text-sm">
            <ul className="ml-5 list-disc text-red-500">
              {errors.map((error: any) => (
                <li key={error.message} className="py-2 capitalize">
                  {error.message}
                </li>
              ))}
            </ul>
          </div>
        )}
        <form className="mt-4 flex flex-col gap-5" onSubmit={handleSubmit}>
          <Input
            id="current-password"
            type="password"
            placeholder="Current Password"
            value={state.currentPassword}
            onChange={e =>
              setState({ ...state, currentPassword: e.target.value })
            }
            required
          />
          <Input
            id="new-password"
            type="password"
            placeholder="New Password"
            value={state.newPassword}
            onChange={e => setState({ ...state, newPassword: e.target.value })}
            required
          />
          <Input
            id="re-password"
            type="password"
            placeholder="Re-enter Password"
            value={state.rePassword}
            onChange={e => setState({ ...state, rePassword: e.target.value })}
            required
          />

          <div className="mt-2">
            <Button type="submit" className="w-full" variant="default">
              Submit
            </Button>
          </div>
        </form>
      </div>
    </Modal>
  );
};

export default ResetPassword;
