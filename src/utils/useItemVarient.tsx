const useItemVarient = (delay: number, top: number) => ({
  hidden: { opacity: 0, y: top },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: delay,
    },
  },
});
export default useItemVarient;
