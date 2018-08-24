import { Component } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  
})
export class AppComponent {


    //callender properties
    now: Date = new Date();
    currentValue: Date = new Date();
    firstDay: number = 0;
    minDateValue: Date = undefined;
    maxDateValue: Date = undefined;
    disabledDates: Function = null;
    zoomLevels: string[] = ["month", "year", "decade", "century"];
    cellTemplate = "cell";
    holydays: any = [[1,0], [4,6], [25,11]];

    

    /**finding is the current day is weekend for coustamisation to disable or enable weekends */
    isWeekend(date)
    {
        var day = date.getDay();
        return day === 0 || day === 6;
    }

    /**setting minimum date like start date */
    setMinDate(e)
    {
        if(e.value) {
            this.minDateValue = new Date(this.now.getTime() - 1000*60*60*24*3);
        } else {
            this.minDateValue = undefined;
        }
    }
    
    /**setting the max date here i dasbled future days so that i mentiond max date was current date */
    setMaxDate()
    {   
            this.maxDateValue = new Date(this.now.getTime());
    }

    /**helps to disable weekends */
    disableWeekend(e)
    {
        if(e.value) {
            var that = this;
            that.disabledDates = function(data) {
                return data.view === "month" && that.isWeekend(data.date);
            };
        } else {
            this.disabledDates = undefined;
        }
    }

    /**mention the first day like sunday/monday according to user choice */
    setFirstDay(e)
    {
        if(e.value) {
            this.firstDay = 1;
        } else {
            this.firstDay = 0;
        }
    }

    /**cell coustumization */
    useCellTemplate(e)
    {
        if(e.value) {
            this.cellTemplate = "custom";
        } else {
            this.cellTemplate = "cell";
        }
    }

    /**css coustomization */
    getCellCssClass(date)
    {
        var cssClass = "";
        if(this.isWeekend(date))
            cssClass = "weekend";
        this.holydays.forEach(function(item) {
            if(date.getDate() === item[0] && date.getMonth() === item[1]) {
                cssClass = "holyday";
                return false;
            }
        });

        return cssClass;
        
    }
    
    /**taks performed while component intialization */
    ngOnInit(){
        
     
    }
    
    /**submitting the selected date and we formate the date according to requirement*/
    public submitDateTime(fromdate,fromtime,totime,todate)
    {
        console.log(fromdate+"=>"+fromtime+"--"+totime+"=>"+todate);
    }

}
