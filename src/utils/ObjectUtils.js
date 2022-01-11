export const filterByText = (array, text = '') => {
  if (array && array.length) {
    return array.filter(obj => {
      const name = obj && obj.name && obj.name.toLowerCase().includes(text.toLowerCase());
      const email = obj && obj.email && obj.email.toLowerCase().includes(text.toLowerCase());
      return name || email;
    });
  }
  return [];
}