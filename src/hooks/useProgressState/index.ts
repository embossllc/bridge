import {useState} from 'react';

const useProgressState = () => {
  const [success, setSuccess] = useState<boolean>(false);
  const [failure, setFailure] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  return {
    setDefault: () => {
      setSuccess(false);
      setFailure(false);
      setLoading(false);
    },
    setSuccess: () => {
      setSuccess(true);
      setFailure(false);
      setLoading(false);
    },
    setFailure: () => {
      setFailure(true);
      setSuccess(false);
      setLoading(false);
    },
    setLoading: () => {
      setFailure(false);
      setSuccess(false);
      setLoading(true);
    },
    success,
    failure,
    loading,
  };
};

export default useProgressState;
