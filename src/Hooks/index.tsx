import { useEffect } from "react";

export function useDocumentTitle(name: string) {
  useEffect(() => {
    document.title = name;
  }, [name]);
}
