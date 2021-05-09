
import { IOfflineProps } from "../components/offline/Container.if";
import { IGlobalState } from "../state/interface";


const mapStateToProps = (state: IGlobalState): IOfflineProps => {

    const timeFormat = new Intl.DateTimeFormat('default', { hour: 'numeric', minute: 'numeric' });  //Time format if lost connection within a day.
    const dateFormat = new Intl.DateTimeFormat('default', { year: 'numeric', month: 'numeric', day: 'numeric', hour: 'numeric', minute: 'numeric' }); //Time with date format if lost connection longer then a day.
    const now = new Date(); //Get what time it is right now.

    if(now.getDate() === state.OnlineStatus.dateWasLastOnline.getDate() && now.getMonth() === state.OnlineStatus.dateWasLastOnline.getMonth() && now.getFullYear() === state.OnlineStatus.dateWasLastOnline.getFullYear()){
        return {
            title: "Connection Lost!",
            subtitle: "Last online at " + timeFormat.format(state.OnlineStatus.dateWasLastOnline),
            iconName: "plug",
        };  //If connection was lost within a day, just show the time.
    } else {
        return {
            title: "Connection Lost!",
            subtitle: "Last online at " + dateFormat.format(state.OnlineStatus.dateWasLastOnline),
            iconName: "plug",
        };  //If connection ws lost more then a day ago, show the date as well.
    }
}

export default mapStateToProps;
