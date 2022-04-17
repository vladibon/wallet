export const generalStyle = {
  boxShadow: 'none',
  width: '100%',
  marginBottom: '20px',
  paddingLeft: '10px',
  fontSize: '18px',
  outline: 'none',
  borderTop: 'none',
  borderLeft: 'none',
  borderRight: 'none',
  borderBottom: '1px solid #e0e0e0',
  borderRadius: 0,

  '&:hover, &:focus': {
    borderBottom: '1px solid #4a56e2',
    outline: 'none',
  },
};

export const menuStyle = {
  overflow: 'hidden',
  borderRadius: '20px',
  color: 'black',
  backgroundColor: 'rgba(255, 255, 255, 0.7)',
  boxShadow: ' 0px 6px 15px rgba(0, 0, 0, 0.1)',
  backdropFilter: 'blur(50px)',
  opacity: 0.95,
  top: 34,
};

export const selectionStyles = {
  option: (provided, state) => ({
    ...provided,
    color: state.isSelected ? '#ffffff' : '#000000',
    fontWeight: 500,
    padding: 20,
  }),

  control: styles => ({
    ...styles,
    ...generalStyle,
  }),
  menu: styles => ({
    ...styles,
    ...menuStyle,
  }),
  singleValue: (provided, state) => {
    const opacity = state.isDisabled ? 0.5 : 1;
    const transition = 'opacity 300ms';
    return { ...provided, opacity, transition };
  },
};
