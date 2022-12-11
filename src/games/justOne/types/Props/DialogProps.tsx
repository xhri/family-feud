export interface DialogProps {
  open: boolean;
  description: string;
  onClose: () => void;
  onAccept: () => void;
  }