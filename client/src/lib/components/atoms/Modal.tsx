import { Dialog, DialogPanel } from '@headlessui/react';
const Modals = ({ children, isOpen, onClose }: any) => {
  return (
    <Dialog
      open={isOpen}
      onClose={() => onClose(false)}
      className="relative z-50"
    >
      <div className="fixed inset-0 top-0 flex justify-center items-center ">
        <DialogPanel className="max-w-[740px] space-y-4 mx-auto w-full">
          {children}
        </DialogPanel>
      </div>
    </Dialog>
  );
};

export default Modals;
