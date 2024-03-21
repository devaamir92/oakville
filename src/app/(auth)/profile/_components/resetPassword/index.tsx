'use client';

import { useState } from 'react';
import { BsKey } from 'react-icons/bs';

import Modal from '@components/ui/Modal';
import { Input } from '@components/ui/Input';
import { Button } from '@components/ui/Button';
import InputPassword from '@components/ui/Input/inputPassword';

interface Props {
  session: any;
}

const ResetPassword = ({ session }: Props) => {
  const [showModal, setShowModal] = useState(false);

  const [errors, setErrors] = useState<any>(null);

  const [state, setState] = useState({
    currentPassword: '',
    newPassword: '',
    rePassword: '',
  });

  const onClose = () => {
    setShowModal(!showModal);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (state.newPassword !== state.rePassword) {
      setErrors({ password: 'Password does not match' });
      return;
    }

    if (state.currentPassword.length < 8) {
      setErrors({ password: 'Current Password must be at least 8 characters' });
      return;
    }

    try {
      const res = await fetch(`${process.env.API_HOST}/api/v1/auth/update`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${session?.user?.token}`,
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
        setErrors(null);
        onClose();
      }
    } catch (error) {
      setErrors([{ message: 'Something went wrong' }]);
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
              {errors?.oldPassword && (
                <li className="py-2 capitalize">{errors.oldPassword}</li>
              )}
              {errors?.password && (
                <li className="py-2 capitalize">{errors.password}</li>
              )}
            </ul>
          </div>
        )}
        <form className="mt-4 flex flex-col gap-5" onSubmit={handleSubmit}>
          <InputPassword
            id="current-password"
            className="text-sm"
            placeholder="Current Password"
            value={state.currentPassword}
            onChange={e =>
              setState({ ...state, currentPassword: e.target.value })
            }
            required
          />

          <InputPassword
            id="new-password"
            className="text-sm"
            placeholder="New Password"
            value={state.newPassword}
            onChange={e => setState({ ...state, newPassword: e.target.value })}
            required
          />

          <InputPassword
            id="re-password"
            className="text-sm"
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
