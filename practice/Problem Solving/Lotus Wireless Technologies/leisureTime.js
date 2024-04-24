let time=["12:30 PM-1:30 PM","10:30 AM-11:30 AM","1:45 PM-2:30 PM"]


const leisure=(time)=>{
    let diff=[];
    for(let i=0;i<time.length;i++){
        
        let time1=time[i].match(/[0-9]+/g)
        let meridian=time[i].match(/[A-Z]+/g)
        let startHrs=+time1[0];
        let startMins=+time1[1];
        let endHrs=+time1[2];
        let endMins=+time1[3]
       
        if(meridian[0]===meridian[1]){
            if(startHrs>endHrs){
                startHrs=+startHrs-12
                diff.push(Math.abs((startHrs*60+startMins)-(endHrs*60+endMins)))
                console.log("DIFF",diff)
            }else{
                diff.push(Math.abs((startHrs*60+startMins)-(endHrs*60+endMins)))
                console.log("DIFF",diff)
            }
        }

    }
}


console.log(leisure(time))