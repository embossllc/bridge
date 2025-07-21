import {httpPost} from '../../axios/axiosUtils';
import useProgressState from '../useProgressState';

const useSendMails = () => {
  const {setFailure, setSuccess, loading} = useProgressState();
  const sendMail = async (data: any) => {
    try {
      const res = await httpPost('send_mail.php', data);
      if (res.success !== undefined) {
        setSuccess();
      }
    } catch {
      setFailure();
    }
  };
  return {loading, sendMail};
};
export default useSendMails;
