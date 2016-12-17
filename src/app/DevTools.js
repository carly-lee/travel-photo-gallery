import React from 'react';
import { createDevTools } from 'redux-devtools';
import DockMonitor from 'redux-devtools-dock-monitor';
import LogMonitor from 'redux-devtools-log-monitor';
import Inspector from 'redux-devtools-inspector';
import DiffMonitor from 'redux-devtools-diff-monitor';

const DevTools = createDevTools(
	<DockMonitor toggleVisibilityKey='ctrl-h'
               changePositionKey='ctrl-q'
               changeMonitorKey='ctrl-m'
               defaultIsVisible={ false }>
		<LogMonitor theme='tomorrow' />
		<Inspector />
		<DiffMonitor theme='tomorrow' />
	</DockMonitor>
);

export default DevTools;
