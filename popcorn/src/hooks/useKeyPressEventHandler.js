import { useEffect } from "react";

export function useKeyPressEventHandler(keyType, optionalActionToTake) {
  useEffect(() => {
    function callback(e) {
      if (e.code.toLowerCase() === keyType.toLowerCase()) {
        optionalActionToTake?.();
      }
    }
    document.addEventListener("keydown", callback);
    return () => document.removeEventListener("keydown", callback);
  }, [optionalActionToTake, keyType]);
}
