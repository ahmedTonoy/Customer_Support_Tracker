const STATUS_STYLES = {
  OPEN: {
    bg: 'bg-[#B9F8CF]',
    text: 'text-[#0B5E06]',
    icon: 'text-[#02A53B]',
  },
  'IN-PROGRESS': {
    bg: 'bg-[#F8F3B9]',
    text: 'text-[#9C7700]',
    icon: 'text-[#FEBB0C]',
  },
};

export const statusStyleChecker = (status = '') => {
  return (
    STATUS_STYLES[status.toUpperCase()] || {
      bg: 'bg-[#E5E7EB]',
      text: 'text-[#374151]',
      icon: 'text-[#6B7280]',
    }
  );
};