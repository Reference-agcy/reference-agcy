export const formatSalary = (salary: string) => {
  const formattedSalary = "$" + salary.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return formattedSalary;
};
