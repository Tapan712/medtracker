import { dateBetn } from "./DateUtil";
export const filterMedByDate = (medList,selectedDate) => {
  const filteredList =[];
 
  medList.forEach(item => {
      if(dateBetn(item?.startDate,item?.endDate,item?.startTime,item?.endTime,selectedDate)){
          filteredList.push(item);
        }
    });
  return filteredList.length>0?filteredList:null;
}
