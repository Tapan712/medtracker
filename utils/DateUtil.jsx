import moment from "moment";

export const dateRange = () => {
  const dateList = [];
  for (let index = 0; index <= 7; index++) {
    dateList.push({
      date: moment().add(index, "days").format("DD"),
      day: moment().add(index, "days").format("dd"),
      formatedDate: moment().add(index, "days").format("L"),
    });
  }
  return dateList;
};

export const timeConverter = (inptime) => {
  let time = inptime + "";
  const [hour, minute] = time.split(":");
  if (parseInt(hour) == 0 && parseInt(minute) == 0) {
    return "12:" + minute + "PM";
  }
  if (parseInt(hour) == 0) {
    return "12:" + minute + "AM";
  }
  if (parseInt(hour) < 12) {
    return time + "AM";
  }
  if (parseInt(hour) == 12 && parseInt(minute) == 0) {
    return time + "AM";
  }
  if (parseInt(hour) == 12 && parseInt(minute) > 0) {
    return time + "PM";
  }
  if (parseInt(hour) > 12) {
    let h = parseInt(hour) - 12;
    return h + ":" + minute + "PM";
  }
};
