import PackDetails from '../pages/PackDetails.page'
import Collection from '../pages/Collection.page'
import Dappies from '../pages/Dappies.page'
import Packs from '../pages/Packs.page'
import Home from '../pages/Home.page'
import Designer from '../pages/Designer.page'

export const ROUTES = [
  { name: "Home", path: "/", component: Home, nav: true },
  { name: "Soldier-Ants", path: "/soldier-ant", component: Dappies, nav: true },
  { name: "Colonies", path: '/colonies', component: Packs, nav: true },
  { name: "Collection", path: '/collection', component: Collection, nav: true },
  { name: "PackDetails", path: '/packs/:packID', component: PackDetails, nav: false },
  { name: "Designer", path: '/designer', component: Designer, nav: false }

]

export const NAV_ROUTES = ROUTES.filter(r => r.nav)