import { FaBell } from 'react-icons/fa';

import Modal from '@components/ui/Modal';
import { Input } from '@components/ui/Input';
import { Button } from '@components/ui/Button';

function ListAlert() {
  return (
    <Modal
      title="Listing Alert"
      icon={<FaBell size={14} />}
      size="sm"
      className="px-0 text-white"
    >
      <h3 className="text-center text-xl">Create A Listing Alert</h3>

      <form action="" className="flex flex-col gap-3 py-4">
        <Input id="name" type="text" placeholder="Name" />
        <select className="flex h-9 w-full rounded border border-slate-300 bg-transparent px-2 py-1 text-sm focus:outline-none">
          <option>Select a Category</option>
          <option>Never</option>
          <option>Daily</option>
          <option>Monthly</option>
        </select>
        <Button type="submit" className="bg-primary">
          Submit
        </Button>
      </form>
    </Modal>
  );
}

export default ListAlert;
