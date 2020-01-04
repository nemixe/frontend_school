import Ppdb from './views/Ppdb/App'
import Home from './views/Ppdb/index'
import Howto from './views/Ppdb/howto'
import Schedule from './views/Ppdb/schedule'
import Selection from './views/Ppdb/selection'
import Registration from './views/Ppdb/registration'
import Heregistration from './views/Ppdb/heregistration'

export default {
  path: '/ppdb',
  component: Ppdb,
  children: [
    {
      path: '',
      name: 'ppdb-home',
      component: Home,
    },
    {
      path: 'how-to',
      name: 'ppdb-howto',
      component: Howto,
    },
    {
      path: 'schedule',
      name: 'ppdb-schedule',
      component: Schedule,
    },
    {
      path: 'selection',
      name: 'ppdb-selection',
      component: Selection,
    },
    {
      path: 'registration',
      name: 'ppdb-registration',
      component: Registration,
    },
    {
      path: 'heregistration',
      name: 'ppdb-heregistration',
      component: Heregistration,
    },
  ]
}
