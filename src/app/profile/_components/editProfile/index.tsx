'use client';

import { useEffect, useState } from 'react';
import { BsPencil } from 'react-icons/bs';

import { useSession } from 'next-auth/react';

import Modal from '@components/ui/Modal';
import { Input } from '@components/ui/Input';
import { Button } from '@components/ui/Button';

const EditProfile: React.FC = () => {
  const { data: session, update } = useSession();
  const [showModal, setShowModal] = useState(false);
  const [errors, setErrors] = useState<any>(null);
  const [state, setState] = useState({
    firstName: '',
    lastName: '',
    phone: session?.user?.phone || '',
  });

  useEffect(() => {
    setState({
      firstName: session?.user?.name?.split(' ')[0] || '',
      lastName: session?.user?.name?.split(' ')[1] || '',
      phone: session?.user?.phone || '',
    });
  }, [session]);

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
          Authorization: `Bearer ${session?.user?.token}`,
        },
        body: JSON.stringify({
          name: `${state.firstName} ${state.lastName}`,
          phone: state.phone,
        }),
      });
      const data = await res.json();
      if (data.errors) {
        setErrors(data.errors);
      } else {
        await update({
          ...session,
          user: {
            ...session?.user,
            name: `${state.firstName} ${state.lastName}`,
            phone: state.phone,
          },
        });
        window.location.reload();
        onClose();
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Modal
      title="Edit Profile"
      icon={<BsPencil />}
      className="rounded bg-primary-500 px-6 py-1.5 text-sm text-white"
      show={showModal}
      OnClose={onClose}
    >
      <div>
        <div className="mx-auto flex justify-center py-5">
          <h4 className="text-2xl font-medium">Account Settings</h4>
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
            id="name"
            type="text"
            placeholder="First Name"
            value={state.firstName}
            onChange={e => setState({ ...state, firstName: e.target.value })}
          />
          <Input
            id="name"
            type="text"
            placeholder="Last Name"
            value={state.lastName}
            onChange={e => setState({ ...state, lastName: e.target.value })}
          />
          <Input
            id="phone"
            type="text"
            placeholder="Phone"
            value={state.phone}
            onChange={e => setState({ ...state, phone: e.target.value })}
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

export default EditProfile;
