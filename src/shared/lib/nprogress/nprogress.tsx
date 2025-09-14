'use client';

import { useEffect } from 'react';
import { NProgressConfig } from './config';
import './styles.css';

export const NProgress = () => {

  // TODO Завязаться на useRouter и вынести компонент из loading.js в layout как отедльный компонент страницы
  useEffect(() => {
    NProgressConfig.start();

    return () => {
      NProgressConfig.done();
    };
  }, []);

  return null;
};
