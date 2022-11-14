export const convertDate = (date: string): number => {
    const splitedDate = date.split("/").map(datePart => parseInt(datePart));
    return new Date(splitedDate[2], splitedDate[1], splitedDate[0]).getTime();
};
