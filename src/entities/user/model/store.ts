import { useSetAtom, useAtomValue } from 'jotai';
import { atomWithStorage, createJSONStorage } from 'jotai/utils';
import { IUser } from './user.interface';

export const userStore = atomWithStorage<IUser | null>(
  'user',
  null,
  createJSONStorage(() => sessionStorage)
);

export const useUserStore = () => useAtomValue(userStore);

export const useUserActions = () => {
  const setUser = useSetAtom(userStore);
  return {
    signIn: (user: IUser) => setUser(user),
    signOut: () => setUser(null),
  };
};
