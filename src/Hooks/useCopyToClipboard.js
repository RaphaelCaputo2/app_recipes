import { useState, useEffect } from 'react';
import copy from 'clipboard-copy';

function useCopyToClipboard(resetTime = null) {
  const [isCopied, setCopied] = useState(false);

  const handleCopy = (pathname) => {
    copy(`http://localhost:3000${pathname}`);
    setCopied(true);
  };

  useEffect(() => {
    let timeoutID;

    if (isCopied && resetTime) {
      timeoutID = setTimeout(() => setCopied(false), resetTime);
    }

    return () => {
      clearTimeout(timeoutID);
    };
  }, [isCopied, resetTime]);

  return [isCopied, handleCopy];
}

export default useCopyToClipboard;
