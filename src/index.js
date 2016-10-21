import './index.html';
import './index.less';
import dva from 'dva';
import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();
// 1. Initialize
const app = dva();

// 2. Plugins
//app.use({});

// 3. Model
//app.model(require('./models/example'));
app.model(require('./models/SleepModel'));
app.model(require('./models/CompetitionModel'));
app.model(require('./models/ActivityModel'));

// 4. Router
app.router(require('./router'));

// 5. Start
app.start('#root');
