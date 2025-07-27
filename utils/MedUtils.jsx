import { dateBetn } from "./DateUtil";
import moment from "moment";

export const filterMedByDate = (medList,selectedDate) => {
  const filteredList =[];
 if(!medList || medList.length === 0) return null;
  medList.forEach(item => {
      if(dateBetn(item?.startDate,item?.endDate,item?.startTime,item?.endTime,selectedDate)){
          filteredList.push(item);
        }
    });
  return filteredList.length>0?filteredList:null;
}
export const fetchDoseStatusList = (formData) => {
  const doseList = [];
  const timeDuration = Math.floor(24/formData?.courseDuration);
  const noOfDoses = formData?.timesPerDay * formData?.courseDuration;
  const startDateTimeMoment = moment();
  console.log(formData);
  for (let i = 0; i < noOfDoses; i++) {
    console.log(formData?.startDate+" "+formData?.startTime+":00");
    const doseTimedate = startDateTimeMoment.add(i * timeDuration, "hours");
    const doseTime = doseTimedate.format("HH:mm");
    const doseDate = doseTimedate.format("MM-DD-YYYY");
    doseList.push({
      dSlNo: (i + 1).toString(),
      date: doseDate,
      time: doseTime,
      status: null
    });
  }
  return doseList.length>0?doseList:null;
}
