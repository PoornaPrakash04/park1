import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import { LayoutDashboard, MapPinned, ParkingCircle, ChartNoAxesCombined, Route, Bus, Activity, ShieldCheck, Menu, Search, Bell, ExternalLink, ChevronRight } from 'lucide-react';
import './styles.css';

const pages = [
  { id:'overview', title:'Overview dashboard', group:'WORKSPACE', icon:LayoutDashboard, path:'parkx_main_overview_dashboard' },
  { id:'map', title:'Explore map', group:'WORKSPACE', icon:MapPinned, path:'parkx_explore_map_transit_overlay' },
  { id:'availability', title:'Parking availability', group:'PARKING INTELLIGENCE', icon:ParkingCircle, path:'parkx_parking_availability_management' },
  { id:'prediction', title:'Availability prediction', group:'PARKING INTELLIGENCE', icon:ChartNoAxesCombined, path:'parkx_parking_availability_prediction' },
  { id:'recommendations', title:'Recommendations', group:'PARKING INTELLIGENCE', icon:Route, path:'parkx_explainable_parking_recommendations' },
  { id:'transit', title:'Transit connectivity', group:'MOBILITY', icon:Bus, path:'parkx_public_transit_connectivity' },
  { id:'analytics', title:'Model analytics', group:'SYSTEM', icon:Activity, path:'parkx_operational_model_performance_analytics' },
  { id:'admin', title:'System health', group:'SYSTEM', icon:ShieldCheck, path:'parkx_system_administration_sensor_gateway_health' },
];
function App(){
 const [active,setActive]=useState('overview'); const [sidebarOpen,setSidebarOpen]=useState(false); const [search,setSearch]=useState('');
 const current=pages.find(p=>p.id===active)||pages[0];
 const groups=[...new Set(pages.map(p=>p.group))];
 return <div className="app-shell">
  <aside className={`sidebar ${sidebarOpen?'open':''}`}>
   <div className="brand"><div className="brand-mark"><ParkingCircle size={24}/></div><div><div className="brand-name">Park<span>X</span></div><div className="brand-caption">SMART MOBILITY</div></div><button className="mobile-close" onClick={()=>setSidebarOpen(false)}>×</button></div>
   <div className="workspace"><div className="workspace-dot"/><div><strong>City Operations</strong><small>GIS intelligence workspace</small></div><ChevronRight size={15}/></div>
   <nav>{groups.map(group=><div className="nav-group" key={group}><div className="nav-label">{group}</div>{pages.filter(p=>p.group===group).map(p=>{const Icon=p.icon;return <button key={p.id} className={`nav-item ${active===p.id?'active':''}`} onClick={()=>{setActive(p.id);setSidebarOpen(false)}}><Icon size={17}/><span>{p.title}</span>{active===p.id&&<span className="active-bar"/>}</button>})}</div>)}</nav>
   <div className="sidebar-bottom"><div className="live-indicator"><span/> All systems operational</div><div className="profile"><div className="avatar">CO</div><div><strong>City Operator</strong><small>Administrator</small></div><span className="profile-dots">•••</span></div></div>
  </aside>
  {sidebarOpen&&<button className="scrim" aria-label="Close menu" onClick={()=>setSidebarOpen(false)}/>}
  <main className="main-area"><header className="topbar"><div className="top-left"><button className="menu-toggle" onClick={()=>setSidebarOpen(!sidebarOpen)}><Menu size={20}/></button><div className="breadcrumb">ParkX <span>/</span> <strong>{current.title}</strong></div></div><div className="top-actions"><label className="searchbox"><Search size={16}/><input value={search} onChange={e=>setSearch(e.target.value)} placeholder="Search dashboard"/><kbd>⌘ K</kbd></label><button className="icon-button" aria-label="Notifications"><Bell size={18}/><i/></button><div className="top-avatar">CO</div></div></header>
   <section className="page-heading"><div><div className="eyebrow"><span className="eyebrow-line"/> PARKX INTELLIGENCE PLATFORM</div><h1>{current.title}</h1><p>Unified parking intelligence, GIS insights, and urban mobility operations.</p></div><div className="heading-meta"><span className="status-pill"><span/> Prototype environment</span><button className="open-page" onClick={()=>window.open(`/stitch-pages/${current.path}/index.html`,'_blank')}><ExternalLink size={15}/> Open screen</button></div></section>
   <div className="screen-wrap"><div className="screen-toolbar"><div className="screen-label"><span className="screen-dot"/> DESIGN PREVIEW <span className="divider-dot">/</span> {current.title}</div><div className="screen-tools"><span>Stitch export</span><span className="window-dots"><i/><i/><i/></span></div></div><iframe key={current.id} title={current.title} src={`/stitch-pages/${current.path}/index.html`} /></div>
   <footer><span>© 2026 ParkX Smart Mobility</span><span>Frontend prototype <b>•</b> API integration pending</span></footer>
  </main>
 </div>
}

createRoot(document.getElementById('root')).render(<App/>);
