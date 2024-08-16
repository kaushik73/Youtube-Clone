export function getTimeDifference(publishDate) {
  const publishDateObj = new Date(publishDate);
  const currentDate = new Date();
  //   const time = currentDate - publishDateObj;
  let years = currentDate.getFullYear() - publishDateObj.getFullYear();
  let months = currentDate.getMonth() - publishDateObj.getMonth();
  let days = currentDate.getDate() - publishDateObj.getDate();
  let hours = +currentDate.getHours() - publishDateObj.getHours();
  //   Adjust the values if necessary
  if (days < 0) {
    months -= 1;
    days += new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      0
    ).getDate();
  }
  // return hours;

  if (months < 0) {
    years -= 1;
    months += 12;
  }

  if (years === 0 && months === 0) {
    if (days === 0) {
      if (hours === 0) return "Just Now";
      return `${hours} hour ago`;
    }
    if (days === 1) return `${days} day ago`;
    else return `${days} days ago`;
  }
  if (years === 0) return `${months} month ago`;
  return `${years} years ago`;
}

export const getViewsNumber = (number) => {
  if (number > 1000000) {
    number = number / 1000000;
    number = Math.floor(number);
    return `${number}M views`;
  }
  if (number > 1000) {
    number = number / 1000;
    number = Math.floor(number);
    return `${number}k views`;
  }

  return `${number} views`;
};
