import './Sidebar.scss';
import Overview from './../Static/Overview.png'
import Insights from './../Static/Insights.png'
import SM from './../Static/SM.png'
import Settings from './../Static/Settings.png'


function Sidebar() {

  const options = [
    { icon: Overview, label: 'Overview'},
    { icon: Insights, label: 'Municipal Insights'},
    { icon: SM, label: 'SM Monitoring'},
  ]

  const sidebarOptions = options.map((option, index) =>{
    return(
      <div className="op" key={index}>
        <img src={option.icon} />
        <span>{option.label}</span>
      </div>
  )})

  return (
    <div className="Sidebar">
      <div className="Sidebar-Logo">
        <div className="Logo">
          <div className="half-circle"></div>
        </div>
        <h2>Tel Aviv</h2>
      </div>
      <div className="options">
        {sidebarOptions}
      </div>
      <div className="options">
        <div>
          <img src={Settings} />
          <span>Settings</span>
        </div>
      </div>
    </div>
  );
}
  
export default Sidebar;