import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Brochure from './Brochure';
import * as serviceWorker from './serviceWorker';

const brochure = {
    title: 'Capitalism vs. Socialism',
    overview: 'Capitalism and socialism are the two primary economic systems used to understand the world and the way economies work. Their distinctions are many, but perhaps the fundamental difference between capitalism and socialism lies in the scope of government intervention in the economy. The capitalist economic model relies on free market conditions to drive innovation and wealth creation and regulate corporate behavior; this liberalization of market forces allows for the freedom of choice, resulting in either success or failure. The socialist-based economy incorporates elements of centralized economic planning, utilized to ensure conformity and to encourage equality of opportunity and economic outcome.',
    prerequisite: ['Capitalism is a market-driven economy. The state does not intervene in the economy, leaving it up to market forces to shape society and life.',
                   'Socialism is characterized by state ownership of businesses and services. Central planning is used to attempt to make society more equitable.',
                   'Most countries are mixed economies, falling in between the extremes of capitalism and socialism.'],
    tentativeTopic: ['Capitalism', 'Socialism', 'Special Considerations']
}

ReactDOM.render(<Brochure title={brochure.title} overview={brochure.overview} prerequisite={brochure.prerequisite} tentativeTopic={brochure.tentativeTopic} />, document.getElementById('root'));

serviceWorker.unregister();
