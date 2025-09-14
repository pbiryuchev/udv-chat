'use client';

import { useEffect } from 'react';
import { NProgressConfig } from './config';
import './styles.css';

export const NProgress = () => {
  useEffect(() => {
    NProgressConfig.start();

    return () => {
      NProgressConfig.done();
    };
  }, []);

  return null;
};
