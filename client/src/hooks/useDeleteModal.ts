import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/router';
import { useState } from 'react';

function useDeleteModal(api: (id: string) => Promise<unknown>, url: string) {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const router = useRouter();
  const { mutate } = useMutation((id: string) => api(id), {
    onSuccess: () => {
      router.replace(url);
    },
  });

  const handleOpenModal = () => setIsOpenModal(true);
  const handleCancelModal = () => setIsOpenModal(false);
  const handleDelete = (id: string) => () => mutate(id);

  return { isOpenModal, handleOpenModal, handleCancelModal, handleDelete };
}

export default useDeleteModal;
