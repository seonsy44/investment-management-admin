import { useEffect } from 'react';
import { useMutation } from '@tanstack/react-query';

import UserService from '@services/UserService';
import { User } from '@type/user';
import useEdit from './useEdit';

function useUserNameEdit(
  inputRef: React.RefObject<HTMLInputElement>,
  userData: User,
  setUserData: React.Dispatch<React.SetStateAction<User>>
) {
  const { isEditMode, handleEditClick, handleEditCancle } = useEdit();
  const { mutate } = useMutation((data: { name: string }) => UserService.patchUser(userData.uuid, data), {
    onSuccess: (data) => {
      setUserData(data);
    },
  });

  const handleSubmitClick = () => {
    if (inputRef.current) mutate({ name: inputRef.current.value });
    handleEditCancle();
  };

  useEffect(() => {
    if (isEditMode && inputRef.current) inputRef.current.focus();
  }, [isEditMode]);

  return { isEditMode, handleEditClick, handleEditCancle, handleSubmitClick };
}

export default useUserNameEdit;
